import React from 'react';

const Dog = ({dog, deleteDog}) => {
    return (
        <div>
            <h3>DOG Name: {dog.name} Id: {dog.id}</h3>
            <button onClick={() => deleteDog(dog.id)}>delete</button>
        </div>
    );
};

export default Dog;