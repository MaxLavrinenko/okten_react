import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'res1':
            return {...state, counter1: state.counter1 = 0}
        case 'inc2':
            return {...state, counter2: state.counter2 + 1}
        case 'dec2':
            return {...state, counter2: state.counter2 - 1}
        case 'res2':
            return {...state, counter2: state.counter2 = 0}
        case 'inc3':
            return {...state, counter3: state.counter3 + 1}
        case 'dec3':
            return {...state, counter3: state.counter3 - 1}
        case 'res3':
            return {...state, counter3: state.counter3 = 0}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0})
    return (
        <div className="App">
            <div>
                {state.counter1}
                <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res1'})}>RESET</button>
                <hr/>
            </div>
            <div>
                {state.counter2}
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res2'})}>RESET</button>
                <hr/>
            </div>
            <div>
                {state.counter3}
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res3'})}>RESET</button>
                <hr/>
            </div>

        </div>
    );
}

export default App;
