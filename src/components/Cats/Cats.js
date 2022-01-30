import React from 'react';


import Cat from "../Cat/Cat";

const Cats = ({cats,deleteCat}) => {
    return (
        <div>
            {cats.map(value=><Cat key={value.id} cat={value} deleteCat={deleteCat}/>)}
        </div>
    );
};

export default Cats;