import domain from '@/utils/config'
import axios from 'axios'
import { useRouter } from 'next/router'

import React, { useState } from 'react'

export default function Add(props) {

  const router = useRouter()
    
  
  const [title, settitle]       = useState('')
  const [imageurl, setimageurl] = useState('')
  const [details, setdetails]   = useState('')
  
  function FnConfirmAdd(){

          axios.post(`${domain}/articleApi`,  {title,imageurl,details}  )
          alert("Article has succesfully Added")
          router.push("/articlesUI")
  }

  return (
    <div className="carteArticleAdd">
                                <h3>Add Article</h3>
                                    <h5>Title:</h5><input type="text" onChange={ ( e ) => {  settitle(e.target.value)  } }  value={title} />
                                    <h5>ImageURL:</h5><input type="text" onChange={ ( e ) => {  setimageurl(e.target.value)  } } value={imageurl}/>
                                    <h5>Détails:</h5> <input type="text" onChange={ ( e ) => {  setdetails(e.target.value)  } } value={details}/>
                                <br />
                                    <button className="btn btn-primary" onClick={FnConfirmAdd}>Ajouter</button>
                                < br />
                    </div>
  )
}
