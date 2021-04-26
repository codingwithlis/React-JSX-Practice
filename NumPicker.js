class NumPicker extends React.Component {
    render() {  
    const num = getNum();

        return (
            <div>
                <h1>Your number is {num} </h1>
                <p>{num === 7 ? "Congrats!" : "Unlucky!"}</p>
                {
                    num === 7 && <img src="https://lh3.googleusercontent.com/proxy/RKBNA90zx_tZfETrdS9F3nkih96aHFnZVuy8RlktMmNts5-2XzhAwlq-CAoa1CtsX47L-SPY4qIlUIE32-YRSn4UQKptIbs"/>
                }
            </div>
        )
    }
}

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
