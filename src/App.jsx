import { Routes, Route, Link } from "react-router-dom";
import logo from './assets/spacex_logo.png';
import { Image } from '@chakra-ui/react'; 

import { LaunchList } from "./components/LaunchList.jsx";
import { LaunchDetails } from "./components/LaunchDetails.jsx"; 
import { RocketDetails } from "./components/RocketDetails.jsx";


export function App() {
  return (
    <>
      <Link to="/">
      <Image m={4} src={logo} width={300} />
      </Link>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  )
}
