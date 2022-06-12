import React from "react";
import "./home.css";
import homeBanner from "../img/homepage-banner.jpg";
import aI from "../img/artificial-intelligencecoloured.png";
import webDev from "../img/website.png";
import cloudData from "../img/cloud-data.png";
import gameDev from "../img/game-development.png";
import analysisImg from "../img/analysis.png";
import programImg from "../img/monitoring.png";
import dmImg from "../img/digital-marketing.png";
import gdImg from "../img/graphic-design.png";
import Development from "./development";
//import Footer
import Footer from "../components/footer";

function Home() {
  return (
    <div className="home-content">
      <div className="container">
        {/* <!-- banner1 --> */}
        <section className="home-banner1">
          <img src={homeBanner} alt="gg" />
        </section>

        {/* <!-- Website details --> */}
        <div className="website-detail">
          <div className="left-detail">
            <h3>How you learn free here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consectetur aperiam voluptates, enim illum, est ea in officia, eos
              omnis quod voluptate aliquid tenetur corrupti dolor atque unde.
              Harum suscipit aperiam quisquam, cupiditate, ut consectetur
              facilis in cumque perspiciatis, itaque asperiores minima aliquid
              pariatur ipsum molestias necessitatibus consequatur doloribus.
              Corrupti alias excepturi ex deserunt nulla hic earum tempora
              dolorum debitis, quasi animi neque quidem sed iste laboriosam
              perspiciatis assumenda deleniti, quo quibusdam. Facilis, dolor.
              Esse iusto error, delectus eligendi laborum, earum sapiente a
              nobis ex culpa, ipsum ullam? Quis tenetur, odit fugit laboriosam
              explicabo nisi maiores sint eveniet nam repudiandae!
            </p>
          </div>
          <div className="right-detail">
            <h3>Steps :</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                repellat!
              </li>
            </ul>
          </div>
        </div>
        {/* //categoryserd */}
        <h1>Top Searched Technologies</h1>
        <Development />
        {/* //Top categories */}
        <div className="catagory-heading">
          <h2>Top Catagory</h2>
        </div>
        <div className="top-categories">
          <div className="cat-card">
            <img src={aI} alt="" />
            <div>
              <h4>Artificial Intellegence</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={webDev} alt="" />
            <div>
              <h4>Web Developement</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={cloudData} alt="" />
            <div>
              <h4>Cloud Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={gameDev} alt="" />
            <div>
              <h4>Game Developement</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={analysisImg} alt="" />
            <div>
              <h4>Data Analytics</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={programImg} alt="" />
            <div>
              <h4>Programming</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={dmImg} alt="" />
            <div>
              <h4>Digital Marketing</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="cat-card">
            <img src={gdImg} alt="" />
            <div>
              <h4>Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
