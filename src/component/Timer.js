import React, { useEffect } from "react";




const Timer = (props) => {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 작동중...');
    }, 1000); 

    return (
      // 함수 안에서 정리 작업 코드 넣기
      () => {
        clearInterval(timer);
      }
    );
  }, [])

  return (
    <div>
      <span>타이머 시작!</span>
    </div>
  );
}

export default Timer;