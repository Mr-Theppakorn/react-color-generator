import React, { useState } from 'react';
import './App.css';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#a83232').all(1));

  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }

  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#f15025" onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
          <button className="btn" type="submit">Submit</button>
        </form>

      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (<SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
