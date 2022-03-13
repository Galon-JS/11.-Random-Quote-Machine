"use strict";
class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: "",
      currentAuthor: "",
      currentColor: "",
    };
    this.generateQuote = this.generateQuote.bind(this);
  }
  componentDidMount() {
    this.generateQuote();
  }
  generateQuote(state) {
    const { currentQuote, currentAuthor, currentColor } = this.state;
    fetch("./quotes.txt")
      .then((response) => response.json())
      .then((quoteJSON) => {
        const quoteLength = quoteJSON.length;
        const quoteColors = [
          "#f39c12",
          "#e74c3c",
          "#9b59b6",
          "#FF6633",
          "#FFB399",
          "#FF33FF",
          "#FFFF99",
          "#00B3E6",
          "#E6B333",
          "#3366E6",
          "#999966",
          "#99FF99",
          "#B34D4D",
          "#80B300",
          "#809900",
          "#E6B3B3",
          "#6680B3",
          "#66991A",
          "#FF99E6",
          "#CCFF1A",
          "#FF1A66",
          "#E6331A",
          "#33FFCC",
          "#66994D",
          "#B366CC",
          "#4D8000",
          "#B33300",
          "#CC80CC",
          "#66664D",
          "#991AFF",
          "#E666FF",
          "#4DB3FF",
          "#1AB399",
          "#E666B3",
          "#33991A",
          "#CC9999",
          "#B3B31A",
          "#00E680",
          "#4D8066",
          "#809980",
          "#E6FF80",
          "#1AFF33",
          "#999933",
          "#FF3380",
          "#CCCC00",
          "#66E64D",
          "#4D80CC",
          "#9900B3",
          "#E64D66",
          "#4DB380",
          "#FF4D4D",
          "#99E6E6",
          "#6666FF",
        ];
        const randomQuote = Math.floor(Math.random() * quoteLength);
        const randomColor = Math.floor(Math.random() * quoteColors.length);
        const quote = quoteJSON[randomQuote];
        const quoteColor = quoteColors[randomColor];

        this.setState({
          currentQuote: quote.text,
          currentAuthor: quote.author,
          currentColor: quoteColor,
        });
        console.log("quote: ", quote);
        console.log("quote.text: ", quote.text);
        console.log("quote.author: ", quote.author);
        console.log("quote.color: ", quoteColor);
      });
  }
  render() {
    const { currentQuote, currentAuthor, currentColor } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${currentQuote} Author is ${currentAuthor}`;
    return (
      <div
        style={{backgroundColor: currentColor, minHeight: "100vh"}}
        className="pt-5"
      >
          
        <blockquote id="quote-box" className="quote-box card bg-light container  d-block">
        
          <div className="quote-author card-header d-flex justify-content-center">
            <h1 id="author" className="card-title">
              {" "}
              {currentAuthor || 'No Author'}{" "}
            </h1>
          </div>
          <div className="quote-text card-body d-flex justify-content-center">              
              <i className="fa fa-quote-left"> </i>
              <span id="text" className="card-text">
                {" "}{currentQuote}{" "}
              </span>
              <i className="fa fa-quote-right"> </i>
            </div>
          <div className="quote-buttons card-footer d-flex justify-content-around">
            <button
              id="new-quote"
              onClick={this.generateQuote}
              className="btn btn-danger"
            >
              New Quote
            </button>
            <a
              href={tweetUrl}
              id="tweet-quote"
              target="_blank"
              className="btn btn-primary tweet-quote"
            >
            <i className="fa fa-twitter-square"></i>
              {" "}Tweet Quote
            </a>
          </div>
        </blockquote>
      </div>
    );
  }
}
ReactDOM.render(<Machine />, document.getElementById("window"));
