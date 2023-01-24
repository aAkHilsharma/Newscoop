import { Component } from "react";
import NewsItem from "../Components/NewsItem"
export default class News extends Component{
    articles=[
        {
            "source": {
              "id": "abc-news-au",
              "name": "ABC News (AU)"
            },
            "author": "Tracey Holmes",
            "title": "Afghanistan women's cricketers resettled in Australia feeling unsupported by international cricket bosses",
            "description": "Most of the women who should be playing cricket for Afghanistan have resettled in Australia since the Taliban took over the country, but they are disappointed by a lack of support from the International Cricket Council.",
            "url": "http://www.abc.net.au/news/2023-01-22/afghanistan-womens-cricket-ban-resettled-in-australia/101872060",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485",
            "publishedAt": "2023-01-21T19:22:28Z",
            "content": "Afghanistan's contracted women cricketers have thanked Australia the government and its people for providing them with a future they never thought they would have after the Taliban took control of th… [+11975 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
          }
    ]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render(){
        return(
            <div className="container my-3">
            <h1>Newscoop - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0, 40)} description={element.description.slice(0, 100)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>})}
            </div>
            </div>
        )
    }
}