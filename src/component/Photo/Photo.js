import React from 'react';

const Photo = ({value}) => {
    return (
        <div>
            <hr/>
            <h3>{value.id}) -- Title: {value.title}</h3>
            <img src={value.thumbnailUrl}/>
            <hr/>
        </div>
    );
};

export default Photo;