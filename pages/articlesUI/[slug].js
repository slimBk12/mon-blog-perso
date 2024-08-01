import domain from '@/utils/config'
import axios from 'axios'
import { useRouter } from 'next/router'

import React, { useState } from 'react'






export default function ArticleEdit(props) {

    const router = useRouter()
    
    const data = props.data
    
    const [title, settitle]       = useState(data .title)
    const [imageurl, setimageurl] = useState(data.imageurl)
    const [details, setdetails]   = useState(data.details)
    
    const _id = data._id

    function FnConfirmChange(){

            axios.put(`${domain}/articleApi`,  {_id,title,imageurl,details}  )
            alert("Article has succesfully Updated")
            router.push("/articlesUI")
    }

            return (
                    <div className="carteArticleEdit">
                                <h3>Article to Edit</h3>
                                    <h5>Title:</h5><input type="text" onChange={ ( e ) => {  settitle(e.target.value)  } }  value={title} />
                                    <h5>ImageURL:</h5><input type="text" onChange={ ( e ) => {  setimageurl(e.target.value)  } } value={imageurl}/>
                                    <h5>Détails:</h5> <input type="text" onChange={ ( e ) => {  setdetails(e.target.value)  } } value={details}/>
                                <br />
                                    <button className="btn btn-primary" onClick={FnConfirmChange}>Valider</button>
                                < br />
                    </div>
            )
}


export async function getServerSideProps(context){

    const detailsArticle = await axios.get(`${domain}/articleApi/${context.query.slug}`)

    return {
        props :{
                 data: detailsArticle.data
               }
    }
}



// export async function getStaticProps(context){

//     const detailsArticle = await axios.get(`${domain}/articleApi/${slug}`)

//     console.log("id article edit ",detailsArticle.data)

//     return {
//         props :{
//                  data: detailsArticle.data
//                }
//     }
// }