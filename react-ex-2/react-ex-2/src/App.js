
import './App.css';
import Page from './component/Page'
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // context를 사용하면 value에 넣은 값이, props를 사용하지 않고 모든 자식 컴포넌트들이 접근 가능해짐.
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page/>  
    </ThemeContext.Provider>
  );
}

export default App;
