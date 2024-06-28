import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export class News extends Component {
  
  static defaultProps = {
    country: "us",
    pageSize: 15,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
   
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News`;
  }

  async updateNews(news) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ loading: true });
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handleNextClick = async () => {
 this.setState({ loading: true });
 this.setState({ page: this.state.page + 1 }, this.updateNews);
};
   
  

  render() {

    const category1 = capitalizeFirstLetter(this.props.category);
    return (
      <div className="justify-center items-center bg-[#233a47] ">
        <h2 className=" text-center text-white py-6 text-6xl font-bold underline"> Headlines - {category1} </h2>
        {this.state.loading && <Spinner />}

        <div className="grid grid-cols-3 gap-4  ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="bg-[#233a47] max-w-lg p-36  flex mx-auto ">
          <button disabled={this.state.page<=1} onClick={this.handlePrevClick}
            type="button"
            className="bg-gray-800 text-white rounded-l-md border-r disabled:text-gray-700 disabled:bg-slate-600 border-gray-100 py-2 hover:text-purple-600  px-3"
          >
            <div className="flex flex-row align-middle">
            
              <p className="ml-2"> &larr; Prev</p>
            </div>
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}
            type="button"
            className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:text-purple-600 disabled:text-gray-700 disabled:bg-slate-600 px-3"
          >
            <div className="flex flex-row align-middle">
              <span className="mr-2">Next &rarr;</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
