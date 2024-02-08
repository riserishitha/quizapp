import { Component } from "react";
class PageFirst extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="firstDiv">
                <h1 className="title">Quiz App</h1>
                <button className="palybtn">Play</button>
            </div>
        )
    }
}
export default PageFirst