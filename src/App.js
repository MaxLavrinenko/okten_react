import './App.css';

function App() {
  return (
    <div className="App">
            <form>
                <label>Add Cat: <input ref={catInput} type="text" name={'cat'}/></label>
                <button onClick={addCat}>Save</button>
                <label>Add Dog: <input ref={dogInput} type="text" name={'dog'}/></label>
                <button onClick={addDog}>Save</button>
            </form>
            <h1>
                <hr/>
            </h1>
            <div style={{display: 'flex', justifyContent: 'center', gap: '500px'}}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
    </div>
  );
}

export default App;
