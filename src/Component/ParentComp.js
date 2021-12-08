import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Simplilearn",
             gender:"Male"
        };
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Simplilearn",
                gender:"Male"
            });
        }, 3000);
    }
    
    render() {
        return (
            <div>I'm the parent 
                <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.gender}/>
            </div>
        )
    }
}

export default ParentComp




