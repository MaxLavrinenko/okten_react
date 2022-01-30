import './App.css';
import {useReducer, useRef} from "react";


import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";

const raducer = (state, action) => {
    switch (action.type) {
        case 'add_cat':
            return {...state, cats: [...state.cats, action.payload.cat]}
        case 'add_dog':
            return {...state, dogs: [...state.dogs, action.payload.dog]}
        case 'del_dog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        case 'del_cat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(raducer, {cats: [], dogs: []});

    const catInput = useRef();
    const dogInput = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const name = catInput.current.value;
        const cat = {
            id: new Date().getTime(),
            name
        }
        dispatch({type: 'add_cat', payload: {cat}});
        catInput.current.value = '';
    }
    const addDog = (e) => {
        e.preventDefault();
        const name = dogInput.current.value;
        const dog = {
            id: new Date().getTime(),
            name
        }
        dispatch({type: 'add_dog', payload: {dog}});
        dogInput.current.value = '';
    }

    const deleteCat = (id) => {
        dispatch({type: 'del_cat', payload: {id}})
    }
    const deleteDog = (id) => {
        dispatch({type: 'del_dog', payload: {id}})
    }

    return (
        <div className="App">
            <form onSubmit={addCat} style={{display:"flex"}}>
                <label>Add Cat: <input ref={catInput} type={'text'} name={'cat'}/></label>
                <button onClick={addCat}>Save</button>
                <hr/>
                <label>Add Dog: <input ref={dogInput} type={'text'} name={'dog'}/></label>
                <button onClick={addDog}>Save</button>
            </form>
            <div style={{display:'flex'}}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <hr/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>

        </div>
    );
}

export default App;
