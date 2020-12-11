import React, { useState, useEffect } from "react";


let reviewData = [];
let reviewData2 =[];

const Reviews = (props) =>{

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