const mongoose = require('mongoose');


export default async function dbConnect(){

  try{
      await mongoose.connect('mongodb+srv://slimJ:etudiant@cluster0.9c2lgv9.mongodb.net/monblog?retryWrites=true&w=majority&appName=Cluster0');
    
      console.log("Connected succesfully !")
     
     
    

}catch(error){
      console.log(error)
  }
}
