import React, {useRef} from 'react';
import Toggle from './Toggle';
import {useTitleInput} from './hooks/useTitleInput'
import Counter from './Counter'

const App = () => {

  const [name, setName] = useTitleInput('')
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      
      <h1 onClick={()=> ref.current.classList.add('hey-there')} >Level Up Dishes</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName); 
      }}>
        <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
        <button>Submit</button>
      </form>

      <h2>{name}</h2>

      <Toggle/>
      <Counter/>
    </div>
  );
};

const formSubmit = (value, setValue) => {

  console.log(`sent to ${value}`)
  setValue('')
};


export default App;
