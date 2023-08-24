import React, {useState, useEffect} from 'react';

function Effect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count+1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }


    // 렌더링 될 때마다
    useEffect(() => {
        console.log('렌더링');
    })

    // 마운트 + count 변경 시 
    useEffect(() => {
        console.log('count 변화');
    }, [count])

    // 마운트 + name 변경 시 
    useEffect(() => {
        console.log('name 변환');
    }, [name])


    // 마운트 될 때 -> 맨 처음 렌더링
    useEffect(() => {
        console.log('마운팅')
    }, [])
    
    return(
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange = {handleInputChange}></input>
            <span>name: {name}</span>
        </div>
    )
}

export default Effect;