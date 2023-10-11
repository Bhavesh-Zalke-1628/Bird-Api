// import { Route, Routes } from "react-router-dom";
// import Home from "../Home/Home";
// import Single from "../Single/Single";
// function CustomRoute() {
//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/Home/:id" element={<Single/>} />
//             </Routes>
//         </>
//     )
// }
// export default CustomRoute;

import { Route, Routes } from "react-router-dom"
import {Home} from '../Home/Home'
import {Single} from '../Single/Single'




export const CustomeRoute = () => {
    return (
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Single/>}/>

        </Routes>
    )
}