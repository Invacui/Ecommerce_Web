
const mongoose = require('mongoose');
const Bcrypt = require(`bcrypt`);
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({ //structure of the doc
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  PassWord: {
    type: String,
    required: true,
  },
  CPass: {
    type: String,
    required: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

//Hashing the Password 

userSchema.pre('save', async function(next){
  console.log("Hashing...")
  if(this.isModified('PassWord')){
      this.PassWord = await Bcrypt.hash(this.PassWord,12);
      this.CPass =await Bcrypt.hash(this.CPass,12);
  }
  next();
});

//Generating token//this keyword doesnt work with fat arrow
userSchema.methods.generateAuthToken = async function(){
  try{
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY )//matching local id with db id
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  }catch(err){
    console.log(err)
  }
}

//collection Creation which is named User223
const User = mongoose.model('User223', userSchema);//Name of the database Table will be declared here.

module.exports = User;




