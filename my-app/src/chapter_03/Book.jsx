// JSX 문법 사용 후
import React from "react";

function Book(props){
    return(
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다`}</h1>
            <h2>{`이 책은 총 ${props.numOfpage} 페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )

};

export default Book;

/*
JSX 문법 사용 전

import React from "react"
function Book(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${props.name} 입니다.`
            ),
            React.createElement(
                'h2',
                null,
                `이 책은 총 ${props.numOfpage} 페이지로 이뤄져 있습니다`
            )
        ]
    )
}

export default Book;

*/