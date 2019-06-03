import React, {
  useRef, useState, useEffect,
} from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const response = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await response.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);
  // adding second parameter of empty array ensures that the useEffect function is only called once
  // (like componentDidMount) instead of after every update

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const formSubmit = (value, setValue) => {
    setValue('');
  };

  return (
    <div className="main-wrapper" ref={ref}>

      <animated.h1 onClick={() => ref.current.classList.add('hey-there')} style={props}>
        Yo yo yo yoy yyoyoyo
      </animated.h1>
      <Toggle />

      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName);
      }}
      >
        <input type="text" onChange={event => setName(event.target.value)} value={name} />
        <button>Submit</button>
      </form>

      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}

      <h2>{name}</h2>

    </div>
  );
};

export default App;

// useMemo

// const reverseWord = word => {
//   console.log('reverseWord function called')
//   return word
//     .split('')
//     .reverse()
//     .join();
// }

// const nameReversed = useMemo(() => reverseWord(name), [name])
