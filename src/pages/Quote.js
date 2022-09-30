import React, { useEffect } from 'react';
import './Quote.css';
import logo from '../assets/4.png';

const Quote = () => {
  // create an array of mathematics quotes

  const quotes = [
    {
      id: 1,
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding –William Paul Thurston',
    },
    {
      id: 2,
      quote: 'Mathematics is the key and door to the sciences –Galileo Galilei',
    },
    {
      id: 3,
      quote: 'Mathematics is the music of reason –James Joseph Sylvester',
    },
    {
      id: 4,
      quote: 'Wherever there is number, there is beauty –Procus',
    },
    {
      id: 5,
      quote: 'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence –Charles Caleb Colton',
    },
    {
      id: 6,
      quote: 'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives -Anonymous',
    },
    {
      id: 7,
      quote: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics –Catherine Johnson, African-American mathematician',
    },
    {
      id: 8,
      quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit –Stefan Banach',
    },
    {
      id: 9,
      quote: 'Pure Mathematics is, in its way, the poetry of logical ideas –Albert Einstein',
    },
    {
      id: 10,
      quote: 'Mathematics has beauty and romance. It’s not a boring place to be, the mathematical world. It’s an extraordinary place; it’s worth spending time there - Marcus du Sautoy',
    },
  ];

  // reload page every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="quotes_div">
      <img src={logo} alt="logo" className="quotes_img" />
      <p className="quote" style={{ textAlign: 'center' }}>
        {quotes[Math.floor(Math.random() * quotes.length)].quote}
      </p>
    </div>
  );
};

export default Quote;
