import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'quote': '',
            'author': ''
        };
        this.getQuote = this.getQuote.bind(this);
    }


    getQuote() {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'quote': data.en,
                    'author': data.author
                });
            });
        const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        const color = Math.floor(Math.random() * colors.length);
        document.body.style.background = colors[color];
        document.body.style.color = colors[color];

    }




    componentDidMount() {
        this.getQuote();
    }


    render() {
        const twitterShare =  'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
        return (
            <div id="wrapper">
                <div id="quote-box">
                    <div className="quote-text">
                        <FontAwesomeIcon icon={faQuoteLeft}/><span id="text"> {this.state.quote}</span>
                    </div>
                    <div className="quote-author">
                        - <span id="author">{this.state.author}</span>
                    </div>
                    <div className="buttons">

                        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={twitterShare}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!">
                            <FontAwesomeIcon icon={faTumblr}/>
                        </a>
                        <button className="button" id="new-quote" onClick={this.getQuote}>New quote</button>
                    </div>
                </div>
                <div className="footer"> by Md. Muminur Rahman</div>
            </div>
        );
    }


}


export default App;
