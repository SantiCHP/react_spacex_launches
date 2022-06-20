import { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import * as API from '../services/launches.js';

import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react'

export function LaunchDetails (props) {
    const [ launch, setLaunch ] = useState({});
    
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then( setLaunch).catch(console.log);
    }, [launchId]); 
    return (
        <Box 
            bg='gray.100' 
            p={4} 
            m={4} 
            borderRadius='lg'
        >
            {!launch.flight_number ? (<div>Loading...</div>) : (
                <>
                    <Flex display='flex'>
                        <Text fontSize='2xl'>
                            Mission <strong>{launch.mission_name}</strong> (
                            {launch.launch_year})
                        </Text>
                        <Spacer />
                        {launch.launch_success ? <Tag bg='green.100' p={2}>Success</Tag> : <Tag bg='red.100' p={2}>Failed</Tag>}
                    </Flex>
                    <Box>
                        Rocket: <Link to={`/rockets/${launch.rocket?.rocket_id}`}>{launch.rocket?.rocket_name}</Link>
                    </Box>
                </> 
            )}
        
        </Box>
    )
}