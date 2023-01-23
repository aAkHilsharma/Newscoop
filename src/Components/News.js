import { Component } from "react";
import NewsItem from "../Components/NewsItem"
export default class News extends Component{
    render(){
        return(
            <div className="container my-3">
            <h1>Newscoop - Top Headlines</h1>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="myDesc" imageUrl="https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485"/>
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