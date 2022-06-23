
import './App.css';
import { useEffect, useRef, useState } from 'react';
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

  // useRef
  const countRef = useRef(0);
  console.log(countRef);
  console.log(countRef.current);
  const increaseCountState = () => {
    setCount(count +1);
  }
  const increaseCountRef = () => {
    countRef.current = countRef.current +1;
  }

  const [ showTimer, setShowTimer ] = useState(false);

  //useRef() 로 DOM 접근 
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, [])

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

      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올리기</button>
      <button onClick={increaseCountRef}>Ref 올리기</button>

      <br/><br/><br/>

      <input type="text" ref={inputRef} placeholder='이름을 입력하세요.'/>
      <button>로그인</button>
    </div>
  );
}

export default App;
