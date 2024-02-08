function Results(){
    return (
        <>
        <h2>Result</h2>
        <div className="lastMain"> 
            <h3>You need more practice!</h3>
            <h4>Your score is 20%</h4>
                <p>Total number of questions <span>15</span></p>
                <p>Number of attempt question<span>9</span></p>
                <p>Number of correct answers <span>3</span></p>
                <p>Number of wrong answers  <span>6</span></p>
        </div>
        <div className="movebtn">
            <button>Play Again</button>
            <button>Back to home</button>
        </div>
        </>
    )
}
export default Results;