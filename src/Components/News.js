import { Component } from "react";
import NewsItem from "../Components/NewsItem"
export default class News extends Component{
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url  = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles, totalResults: parsedData.totalResults});
    }
    truncate = (input) =>
         input?.length > 45? `${input.substring(0, 45)}...` : input;
    reduce = (input) =>
         input?.length > 100? `${input.substring(0, 100)}...` : input;
    handleNextClick = async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults / 20))){
            let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState ({articles : parsedData.articles,
            page : this.state.page+ 1
        });
        }
    }
    handlePrevClick = async()=>{
        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles,
            page: this.state.page - 1
        });
    }
    render(){
        return(
            <div className="container my-3">
            <h1>Newscoop - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{return <div className="col-md-4" key={element.url}>
                    <NewsItem title={this.truncate(element.title)} description={this.reduce(element.description)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>})}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}