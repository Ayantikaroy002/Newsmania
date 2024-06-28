import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className=" my-28 ">
        <div className="rounded ml-20 shadow-lg -mt-20 w-80">
          <img  src={!imageUrl?"https://fscl01.fonpit.de/userfiles/7687254/image/nextpit_Apple_Vision_Pro_2023.jpg":imageUrl} alt="blog" />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">{title}</div>
            <p className="  text-base">
              {description}
            </p>
          </div>
          <div className="ml-1 my-2 pb-7 ">
            <a  href={newsUrl}  className="text-white bg-[#0067b8] rounded md:mx-5 px-4 py-2 my-6 font-bold">
             Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
