import React from 'react';

const Photo = ({value}) => {
    return (
        <div>
            <h3>{value.id}) -- Title: {value.title}</h3>
            <img src={value.thumbnailUrl}/>
        </div>
    );
};

export default Photo;