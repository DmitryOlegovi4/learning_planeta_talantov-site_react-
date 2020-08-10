import React, {Component} from "react";
import "./News.css";
import {DataNews} from "./DataNews";
import NewsElem from "./NewsElem";

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataNews.data
        }

    }
    render() {
        return(
            <div className="News">
                <h1 className="News_h1">Новости</h1>
                <p className="News_p">&laquo;Планеты Талантов&raquo;</p>
                <div className="NewsContainer">
                    <div className="NewsElemContainer">
                        <div className="NewsFirstElem NewsItem_0" style={{backgroundImage: "url("+this.state.data[0].url+") ,linear-gradient(45deg, #393838, grey)"}}>
                            <a href="/"><p className="NewsFirstElem_title">{this.state.data[0].title}</p></a>
                            <p className="NewsFirstElem_descr">{this.state.data[0].descr}</p>
                        </div>
                        {this.state.data.splice(1, 5).map((elem,i) => <NewsElem key={i} elem={elem} classItem={'NewsItem_'+(i+1)}/>)}
                        <div className="Blog NewsItem_6">
                            <p>И ещё более десятка <br/>новостей в нашем блоге</p>
                            <button>ЧИТАТЬ ВСЕ</button>
                        </div>
                        <div className="VK NewsItem_7">
                            <div id="vk_groups">
                            </div>
                        </div>

                    </div>
                </div>
                <p className="News_archive"><a href="/">Архив новостей  &#10132;</a></p>
            </div>
        )
    }
}

export default News;