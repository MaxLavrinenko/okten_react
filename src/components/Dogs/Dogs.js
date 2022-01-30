import React from 'react';


import Dog from "../Dog/Dog";

const Dogs = ({dogs, deleteDog}) => {
    return (
        <div>
            {dogs.map(value => <Dog key={value.id} dog={value} deleteDog={deleteDog}/>)}
        </div>
    );
};

export default Dogs;