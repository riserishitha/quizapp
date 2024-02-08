function PageSecond(){
    return(
        <div className="main"> 
            <h1>Question</h1>
             <p className="series">1 of 15</p>
            <h3 className="ques">Which is the only mammal that can jump?</h3>
           <div className="option1">
                <p className="btn">Dog</p>
                <p className="btn">Elephant</p>
            </div>
            <div className="option2">
                <p className="btn">Goat</p>
                <p className="btn">Lion</p>
            </div>
            <div className="options">
                <button className="last previous">Previous</button>
                <button className="last next">Next</button>
                <button className="last quit">Quit</button>
            </div>  
        </div>
    )
 }

export default PageSecond;