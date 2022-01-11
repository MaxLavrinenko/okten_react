import {useEffect, useState} from "react";

import Launch from "../Launch/Launch";


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value.filter(value => value.launch_year < 2020)))
    }, []);

    return (
        <div>
            {launches.map(value => <Launch key={value.flight_number}
                                           mission_name={value.mission_name}
                                           launch_year={value.launch_year}
                                           mission_patch_small={value.links.mission_patch_small}
            />)}
        </div>
    )
}
export default Launches;