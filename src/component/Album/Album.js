import React from 'react';
import {Link} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const Album = ({value}) => {

    return (
        <div>
            <div>
                <h3>{value.id}) Title: {value.title}</h3> <Link to={`${value.id}`}><button>Photos</button></Link>
                <hr/>

            </div>
        </div>
    );
};

export default Album;
