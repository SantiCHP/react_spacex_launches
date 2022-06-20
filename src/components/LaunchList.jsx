import { useEffect, useState } from "react";
import { Heading, Image } from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";

import * as API from "../services/launches";

export function LaunchList () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log);
      }, []); 

      return (
        <>
            <Heading as = 'h1' align='center' size='lg' m={4}>SpaceX Launches</Heading>
            {!launches.length ? (<div>Loading...</div>) : (
                <section> 
                {launches.map(launch => (
                    < LaunchItem key={launch.flight_number + '-' + launch.mission_name} {...launch}/>
                ))}
                </section>
            )}
        </>
      );
}
