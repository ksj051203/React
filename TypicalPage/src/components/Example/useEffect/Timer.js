import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        // 1초마다 한번씩 콜백 함수가 실행된다.
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중');
        }, 1000);
        return () => {
            // 언마운트 시 타이머 삭제
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    }, [])
    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;