/*
import React, { Component } from "react";

class R010_Variable extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){/
        var varName = 'react'; //var는 재선언 및 재할당 가능
        console.log('varName1 : ' +varName);
        var varName = '200';
        console.log('varName2 : ', +varName);

        let letName = 'react'; //let은 재선언 시 에러, 재할당 시 허용
        console.log('letName1 : ', +letName);
        letName = 'react200';
        console.log('letName2 : ', +letName)

        const constName = 'react'; //const는 재선언 시 에러, 재할당 시 에러
        console.log('constName : ', +constName);
    }

    render(){
        return(
            <h2>[THIS IS Variable]</h2>
        )
    }
}

export default R010_Variable;
*/