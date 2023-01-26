import { Component } from "react";
import NewsItem from "../Components/NewsItem"
import Spinner from "./Spinner";
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
        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults: parsedData.totalResults,
            loading : false
        });
    }
    truncate = (input) =>
         input?.length > 45? `${input.substring(0, 45)}...` : input;
    reduce = (input) =>
         input?.length > 100? `${input.substring(0, 100)}...` : input;
    handleNextClick = async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults / 20))){
            let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState ({articles : parsedData.articles,
            page : this.state.page+ 1,
            loading : false
        });
        }
    }
    handlePrevClick = async()=>{
        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7385c9251e4543b1a42fdeacdbbd1a11&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles,
            page: this.state.page - 1,
            loading : false
        });
    }
    render(){
        return(
            <div className="container my-3">
            <h1 className="text-center">Newscoop - Top Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{return <div className="col-md-4" key={element.url}>
                    <NewsItem title={this.truncate(element.title)} description={this.reduce(element.description)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>})}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}