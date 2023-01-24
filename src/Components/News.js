import { Component } from "react";
import NewsItem from "../Components/NewsItem"
export default class News extends Component{
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url  = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7385c9251e4543b1a42fdeacdbbd1a11";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles});
    }
    truncate = (input) =>
         input?.length > 45? `${input.substring(0, 45)}...` : input;
    reduce = (input) =>
         input?.length > 100? `${input.substring(0, 100)}...` : input;
    render(){
        return(
            <div className="container my-3">
            <h1>Newscoop - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{return <div className="col-md-4" key={element.url}>
                    <NewsItem title={this.truncate(element.title)} description={this.reduce(element.description)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>})}
            </div>
            </div>
        )
    }
}