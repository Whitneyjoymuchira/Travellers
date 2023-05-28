import React from "react";
import { Link } from "react-router-dom";



//  
//      
//       </li>
//       {/* <li className="nav-links"> */}
//         <Link to="/signup">
//           <button className="nav-links-mobile">Sign up</button>
//         </Link>
//       {/* </li> */}
//     </ul>
//   );
// }



export const MenuItems=[
  {
    title:"Home",
    url:"/",
    cName:"nav-links",
    icon:"fa-solid fa-house"
  },
  {
    title:"About",
    url:"/about",
    cName:"nav-links",
    icon:"fa-solid fa-circle-info"
  },
  {
    title:"Service",
    url:"/services",
    cName:"nav-links",
    icon:"fa-solid fa-briefcase"
  },
  {
    title:"Contacts",
    url:"/contacts",
    cName:"nav-links",
    icon:"fa-solid fa-address-book"
  },
  {
    title:"Sign Up",
    url:"/signUp",
    cName:"nav-links-mobile"
  
  }
]


