
import './App.css';
import { useEffect, useState } from 'react';
import Timer from './component/Timer';

function App() {

  const [names, setNames] = useState(["홍길동", "김민수"]);
  //const [name, setName] = useState('');
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      return (
        [input, ...prevState]
        //Spread Operator : 특정 객체/배열의 값을 다른 객체/배열로 복제/옮길 때
        //리액트 : state의 특정 부분만 바꾸거나, 최초의 상태 + 데이터 추가하는 경우에 사용 
      );
    });
  }

  const [ count, setCount ] = useState(1);
  const handleCountUpdate = () => {
    setCount(count +1);
  }

  useEffect(() => {
    // 매번 랜더링 될 때마다 실행

  })

  const [ showTimer, setShowTimer ] = useState(false);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}

      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input text="text"/>
      

      {showTimer && <Timer/>}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
