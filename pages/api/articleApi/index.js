import  dbConnect from "@/utils/dbConnect";
import { createRouter } from 'next-connect';
import Article from "../models/articleSchema";


// tout les focntion doivent étre await
// toiut acces a une source extern doit étre await

dbConnect();

const router = createRouter();

router.get(async(req,res)=>{
    console.log("get marche")
   try{


       const articles = await Article.find()
       res.send(articles)

    // console.log(articles)

   }
   catch (error){
    res.status(400).json({ status: 'Error somthing went wrong on router.get ' })
        console.log(error)
   }

}).put(async(req,res)=>{
    try{

        const newArticleValue = {
            _id : req.body._id,
        } 

        
        const articleFromBD    =  await Article.findOne(newArticleValue)

        articleFromBD.title    =  req.body.title;
        articleFromBD.imageurl =  req.body.imageurl;
        articleFromBD.details  =  req.body.details;

        console.log("articleFromBD  ",articleFromBD )

        await articleFromBD.save()
        
        res.send('Post has been updated Successfully !')
   }
   catch (error){
    res.status(400).json({ status: 'Error somthing went wrong on router.put' })
        console.log(error)
   }

}).post(async(req,res)=>{
    try{

        const {title , imageurl  ,  details } = req.body

        const articleToBD    =  new Article(   {title , imageurl  ,  details }  )

        console.log("new article  ",articleToBD )

        await articleToBD.save()
        
        res.send('Article has been added Successfully !')
   }
   catch (error){
    res.status(400).json({ status: 'Error somthing went wrong on router.post' })
        console.log(error)
   }

})





export default  router.handler();
