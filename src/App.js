import React,{ useState } from 'react';

const App = () => {
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)
const increment2 = () => setCount(previousCount => previousCount + 1)
const decrement2 = () => setCount(previousCount => previousCount - 1)
const reset = () => setCount(0)
const double = () => setCount(count * 2 )
const third = () => setCount(previousCount =>{if(count % 3 === 0){
    return previousCount / 3
}else {
    return previousCount 
}
                                             })
  return (
	<>
    <div>
	count: {count}
    </div>
<div>    
<button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
</div>
<div>
<button onClick={increment2}>+1</button>
<button onClick={decrement2}>-1</button>
<button onClick={reset}>0</button>
<button onClick={double}>x2</button>
      <button onClick={third}>さんの倍数の時だ割る</button>
</div>

	</>
  );
}

export default App;
