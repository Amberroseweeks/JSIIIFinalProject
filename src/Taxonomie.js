import React, { useState, useEffect } from "react";
import Card from "./Card.js";


let taxonomie = [];

const Taxonomie = (props) => {

console.log(props.activity);

    return (
        <div>
   <p>bhbhjtest{props.activity}</p>
        </div>
     
);

};

// const [activity, setActivity] = useState({});
//   useEffect(async () => {
//     const getActivity = async () => {
//       const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
//       const dataactivity = await response.json();
//       console.log(dataactivity);
//       dataactivity.map((activityinfo) => {

//         taxonomie.push(activityinfo)


            
//       })
//       return taxonomie;
      
//     };
//     const activity = await getActivity();
//     setActivity(activity);


//   }, []);
// // console.log(park);


//   return (


    

//         <div className="container">
//         {

//             taxonomie.map((activityinfo) => {
//               console.log(activityinfo);
//               let allActivities = activityinfo.activities;
//               activityinfo.activities.map(item => {
//                 console.log(item);
//                 // return <Card activities={item.activity}/>;
//                 return <p>bhbhjtest</p>
//               })
// //               allActivities.map((activities) => {
// //                   console.log(activities.activity);

// // })

            
//       })}

        
//     </div>
        


// )
// };


export default Taxonomie;