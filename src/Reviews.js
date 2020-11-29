import React, { useState, useEffect } from "react";


let reviewData = [];
let reviewData2 =[];

const Reviews = (props) =>{


   
    

    const [reviews, setReviews] = useState([]);

    // useEffect(async () => {
    
        
    //       const getReviews = async () => {
            
    //         const response = await fetch(
    //           `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}/reviews.json`
    //         );
        
    //         const reviews = await response.json();
            
        

    //           reviewData.push(reviews);
              
 
            
    //       };
        
    //         getReviews();
    //         setReviews();
            
    //       }, []);

          

  return(
      
    <div>


{

          

reviewData.map((review) => {
    
  return review



})
}
{
reviewData2.map((reviewAll)=>{
    return (
        <div> <p>Test-{reviewAll.id}</p> </div>
        )
})
}
      
       
 
    </div>

)

}

export default Reviews;