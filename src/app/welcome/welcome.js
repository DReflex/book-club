import React from 'react';
import Login from './login';
import smoothscroll from 'smoothscroll'
import './welcome.css'
class Welcome extends React.Component {
  componentDidMount(){
    console.log(window.innerHeight);
  }
  // add login to connect
  render(){
    console.log("does it change", window.innerHeight);
    return (
      <div>
        <div style={{height:window.innerHeight}} className="welcome-body">
          <div className="overlay1"></div>
          <div className="welcome-home">
            <img className="tree" alt="tree" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fthumbnails%2Ftree-triangular-shape-with-roots%20(1).svg?1513079789794" />
            <h1 className="header-h1">Welcome to Book Club</h1>
            <button className="connect">Connect</button>
            <button onClick={()=>smoothscroll(window.innerHeight,1000)} className="learn">Learn more</button>


          </div>
        </div>
        <div className="welcome-detail">
          <div className="w-heading"><h1>Core Features</h1></div>
          <div className="w-detail">
            <div className="icon-con">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/155/155552.svg"/>
              </div>
              <h3>Search</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/14/14037.svg"/>
              </div>
              <h3>Aad</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/642/642852.svg"/>
              </div>
              <h3>Discuss</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/88/88208.svg"/>
              </div>
              <h3>Star favourite</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/184/184312.svg"/>
              </div>
              <h3>Edit Profile</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="techonology">

          <div className="w-heading"><h1>Technologies</h1></div>
          <div className="w-technology">
            <div className="tech-box tech-big">
              <img alt="box" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png" />
              <div className="box-desc">
                <h4>React</h4>
              </div>
            </div>
            <div className="tech-box tech-big">
              <img alt="box" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" />
              <div className="box-desc">
                <h4>Redux</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
              <div className="box-desc">
                <h4>NodeJs</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="http://devstickers.com/assets/img/pro/rd5f.png" />
              <div className="box-desc">
                <h4>Socket.io</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="https://rishabh.io/recipes/img/004-express-js.png" />
              <div className="box-desc">
                <h4>Express</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" />
              <div className="box-desc">
                <h4>MongoDb</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" />
              <div className="box-desc">
                <h4>GitHub</h4>
              </div>
            </div>
            <div className="tech-box">
              <img alt="box" src="https://blog.phusion.nl/content/images/2016/07/Heroku.png" />
              <div className="box-desc">
                <h4>Heroku</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}


export default Welcome
