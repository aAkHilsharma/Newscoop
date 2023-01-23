import { Component } from "react";

export default class NewsItem extends Component{
    render(){
        let {title, description} = this.props;
        return(
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="url(https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485)" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}