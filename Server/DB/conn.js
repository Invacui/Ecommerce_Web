const mongoose = require('mongoose');
const dotenv = require("dotenv");
/*const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://ASH1748:root1@ashclusters.ej6nn1h.mongodb.net/EcommerceDB?retryWrites=true&w=majority";



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

dotenv.config({path:"./config.env"});
  
const DB = process.env.DATABASE;

mongoose.connect(DB, {          //This block is to remove deprication warning.

}).then(() => {
    console.log(`Connection Successful!`);
}).catch((err) => console.log(`Connection Failed!`)); //connecting DB using mongoose using connection string.And Checking this Using prommise function
 
