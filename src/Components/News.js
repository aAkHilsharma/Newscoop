import { Component } from "react";
import NewsItem from "../Components/NewsItem"
export default class News extends Component{
    render(){
        return(
            <div className="container my-3">
            <h1>Newscoop - Top Headlines</h1>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
            </div>
            </div>
        )
    }
}