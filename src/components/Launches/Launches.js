import {useEffect,useState} from "react";
import Launch from "../Launch/Launch";
const Launches = ()=>{
    const [launches,setLaunches] = useState([]);
    let res = []
    let counter=0
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))
    },[]);
    res = launches.filter(item => item.launch_year < 2020)

    return(
        <div>
            {res.map(value => <Launch key = {counter++}
                                      mission_name={value.mission_name}
                                           launch_year={value.launch_year}
                                           mission_patch_small={value.links.mission_patch_small}
            /> )}
        </div>
    )
}
export default Launches;