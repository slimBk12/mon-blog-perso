import domain from '@/utils/config'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'


export default function Index(props) {

    const data = props.data
    const router = useRouter()


    async function fnDelete(param){
        try{
    
            await axios.delete(`${domain}/articleApi/${param}`)
            alert("Article has succesfully Deleted")
            router.push("/articlesUI")
        }
        catch(error){ console.log(error)}   
    }

    

    
  return (
            <>     
                {
                    data.map( (elem)=>(
                        <div className="carteArticle">
                            <h1>{elem.title}</h1>
                            <Image src={elem.imageurl}  width={200} height={200} />
                            <p>{elem.details}</p>
                            <button className="btn btn-success" onClick={()=>{router.push(`articlesUI/${elem._id}`)}}>Edit</button>&nbsp;
                            <button className="btn btn-danger"  onClick={() =>{fnDelete(elem._id)}}>delete</button>
                            <br />
                            <br />
                        </div>
                        
                      )  )
                }
            </>
  )
}


export async function getStaticProps(){

        const reponse = await axios.get(`${domain}/articleApi`);

        return {
                    props : { data :reponse.data}
               }
    }