import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Feedbox</h1>
      <p>Collect feedback from your users.</p>
      <button
        onClick={() => console.log('hi')}
        className="blue darken-1 btn waves-effect waves-light">
        Learn more
      </button>
    </div>
  );
};

export default Landing;
