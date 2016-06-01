import React, { PropTypes } from 'react';

const TestComponent = ({ model, increase }) => {
  const _increase = increase.bind(this, model.value);
  return (
    <div>
      <p>{model.text} x {model.value}</p>
      <button onClick={_increase}>Click</button>
    </div>
  );
};

TestComponent.propTypes = {
  model: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
};

export default TestComponent;
