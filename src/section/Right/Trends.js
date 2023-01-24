import React from 'react';
import './Trends.css';
function Trends() {

    const Trending=[
        {
            Trends:"Entertainment",
            Hash:"@PushpaThe Rule",
            Tweets:"31.4k Tweets"
        },
        
        {
            Trends:"Trending in  India",
            Hash:"#बागेश्वर धाम सरकार",
            Tweets:"Trending with #BageshwarDham"
        },

        {
            Trends:"Trending in India",
            Hash:"#PawanKalyanOnAHA",
            Tweets:"Trending with BAA ALL EPISOD"
        },
        {
            Trends:"Trending in India ",
            Hash:"#BipulSarkar",
            Tweets:"67.8B Tweets"
        }
    ]
  return (
    <>

   <div className='trend'>

        <h2>  What's happening</h2>

        
        {Trending.map((data)=>
            <div> 
             <div>{data.Trends}</div>
              <div>{data.Hash}</div>
            <div>{data.Tweets}</div> 
        </div>
         )}
   </div>
   </>
  )
}
export default Trends;
