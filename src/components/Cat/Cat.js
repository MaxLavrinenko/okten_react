import React from 'react';

const Cat = ({cat, deleteCat}) => {
    return (
        <div>
            <h3>Cat name: {cat.name} id: {cat.id}</h3>
            <button onClick={() => deleteCat(cat.id)}>delete</button>
        </div>
    );
};

export default Cat;