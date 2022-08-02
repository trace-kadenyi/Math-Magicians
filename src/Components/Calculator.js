/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <main>
        <section className="calculator">
          <p className="output">0</p>
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="symbol" type="button">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="symbol" type="button">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="symbol" type="button">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="symbol" type="button">+</button>
          <button className="zero" type="button">0</button>
          <button type="button">.</button>
          <button className="symbol" type="button">=</button>
        </section>
      </main>
    );
  }
}
export default Calculator;