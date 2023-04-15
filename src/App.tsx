import React, { createElement as e, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return e('div', { className: 'wrapper' }, [
    e('h1', { className: 'heading', key: 1 }, `Hello From JSX ${count}`),
    e('button', {
      className: 'py-2 px-4 mt-4 border',
      key: 2,
      onClick: () => setCount(count + 1),
    }, 'Click me!!')
  ])
}

export default App;
