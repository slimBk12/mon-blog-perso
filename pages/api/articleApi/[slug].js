import  dbConnect from "@/utils/dbConnect";
import { createRouter } from 'next-connect';
import Article from "../models/articleSchema";


// tout les focntion doivent étre await
// toiut acces a une source extern doit étre await

dbConnect();

const router = createRouter();

router.get(async(req,res)=>{

    const article = {    
        _id :req.query.slug
    }

   try{
        const articleToEdit = await Article.findOne(article)
        // send va répondre la fonction getServerSideProps ( context)
        //dans le fichier articleUI/[slug].js
        res.send(articleToEdit)
   }
   catch (error){
    res.status(400).json({ status: 'Error somthing went wrong on router.get one article to edit' })
        console.log(error)
   }

}).delete(async(req,res)=>{

    const article = {    
        _id :req.query.slug
    }

   try{
        const articleToDelete = await Article.findOneAndDelete(article)
        res.send('Article has been deleted Successfully !')
   }
   catch (error){
    res.status(400).json({ status: 'Error somthing went wrong on router.get one article to edit' })
        console.log(error)
   }

})


export default  router.handler();
