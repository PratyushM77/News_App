import React from 'react'
import './Card.css'


const Newscomponent =(props)=>  {
 
    let {title,description,imageUrl,newsUrl,publishedAt,author,source} = props
    return (
      <div>
       

        <div className="card mx-5" >
  <img style={{height: "26vh"}} src={!imageUrl?"https://cdn2.vectorstock.com/i/1000x1000/39/51/error-404-page-not-found-vector-14463951.jpg":imageUrl} className="card-img-top" alt={imageUrl}/>
   <div className="card-body">
    
    <h5 className="card-title">{title}</h5>
    
    <span style={{zIndex:"1"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    
  </span>
    <p className="card-text">{description}...</p>
    <p className="card-text">Published by <u> <b>{!author?"Unknown":author}</b></u></p>
    <p className="card-text"><small className="text-body-secondary">On {new Date (publishedAt).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer"  target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}
export default Newscomponent
