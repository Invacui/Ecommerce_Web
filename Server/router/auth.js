const express = require("express");
const jwt = require("jsonwebtoken");
const Bcrypt = require(`bcrypt`);
const router = express.Router();
require('../DB/conn');
const authenticate = require("../middleware/authenticate");

const User = require("../model/User");

router.get('/',(req,res) =>{
    res.send(`Hello From the Router`);
});

router.post('/signup' ,(req,res) =>{
    let token;
    const {fname,email,PassWord,CPass,Phone}= req.body;
   if(!fname || !email || !PassWord || !CPass || !Phone){
    return res.status(422).json({ error : "Please Fill the Empty Feild."});
   }//422 Error express that every thing is right but the client has made some mistake aka not filling the data.
    
   //Check If the User Already Exist or Not
   User.findOne({email:email})
   .then((userExist)=>{
    if(userExist){
        return res.status(422).json({ error : "Email already exist"});
    }
    if(PassWord != CPass){
        return res.status(422).json({ error : "Password Is Not Matching. Try Again"});
    }else{
    const user = new User({fname,email,PassWord,CPass,Phone}) //If doesn't exist then create one.
    user.save().then(() =>{
        res.status(201).json({message: "user register successfully" +`${user}`});
    
        console.log(user);
    }).catch((err) => res.status(500).json({error: "Failed to create user."}));
   }
}).catch((err) => {console.log(err);});

});


router.post('/login', async(req, res)=>{
    try
        {
            const {email, PassWord} = req.body;
            if(!email || !PassWord)
                {
                    return res.status(400).json({error:"Fill all the feilds please."});
                }
            const userLogin = await User.findOne({ email: email });
            console.log(userLogin);
            
            if(userLogin)
            {
                const checkLogin = await Bcrypt.compare(PassWord,userLogin.PassWord);
                //token generations
                token = await userLogin.generateAuthToken();
                console.log(token);
                //storing cookies
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 25892000000) ,
                    httpOnly:true
                });
                
                
                if(!checkLogin)
                    {
                        res.status(400).json({error : "Login Failed PAss"});
                    }
                else
                    {
                        res.json({message: "user Logged In Successfully"});
                    }
            }
            else
            {
                res.status(400).json({error : "Login Failed Email"});
            }
         }catch(err)
            {
                console.log(err);
            }
});



//Verify before using page that the user is logged in or not by creating endpoints

 router.get('/DATAFEndpoint',authenticate, (req, res) => {
    res.send(req.rootUser);
  });

//Logout endpoint
router.get('/logout', (req, res) => {
    console.log('Logout Page In Action...');
    res.clearCookie('jwtoken',{path : '/'}); //clear cookie and redirect to /
    res.status(200).send('User Logged Out');
  });

module.exports = router;

/*//Login Route
router.post('/login',(req,res)=>{
    console.log(req.body);
    res.json({message:"Ack Recieved.."});
    try{
            const { email, PassWord } = req.body;
            if(!email || !PassWord){
                return res.status(400).json({error:'Please Fill the Data'})
            } 
        //Check The DB for Existing Data 

            async function getUserByEmail(email) {
            
              const userLogin = await User.findOne({ email: email });
              res.json({message: "SignIn Succeessfully"});
              console.log(userLogin);}
        }        catch(err)
                {
                    res.status(400).json({error: "SignIn Failed"});
                    console.log(err)
                }
}) */
