import logo from './logo.svg';
import './App.css';
import Page from './component/Page'
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Page isDark={isDark} setIsDark={setIsDark} />
  );
}

export default App;
