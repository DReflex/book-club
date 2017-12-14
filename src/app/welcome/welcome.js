import React from 'react';
import Login from './login';
import smoothscroll from 'smoothscroll';
import { connect } from 'react-redux';
import './welcome.css'
class Welcome extends React.Component {
  constructor(){
    super();
    this.handleScroll= this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', (e)=>this.handleScroll());
    console.log(window.innerHeight);
    console.log(this.props.user);
    window.scrollTo(0, 1)
    window.scrollTo(0,0)
  }
  componentWillUnmount() {
      document.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(){
    const icons = [...document.getElementsByClassName("icon-con")]
    function doSetTimeout(i, icon, string) {
      setTimeout(function() {
        icon.className = `icon-con ${string}`
      },i * 200);
    }

    if(window.pageYOffset >= (window.innerHeight/2) ){
        for (var i = 0; i < icons.length; i++) {
        doSetTimeout(i, icons[i], "animate")
        }

    }else {
      for (var i = 0; i < icons.length; i++) {
      doSetTimeout(i, icons[i], "")

      }
    }
  }
  handleConnect= () =>{
    let button = [...document.getElementsByClassName('connect')]
    let connect = [...document.getElementsByClassName('connect-buttons')]
    button[0].className="connect button-animate"
    connect[0].className="connect-buttons connect-show"

  }
  // add login to connect
  render(){
    console.log("does it change", window.innerHeight);
    return (
      <div>
        <div style={{height:window.innerHeight}} className="welcome-body">
          <div className="overlay1"></div>
          <div className="welcome-home">
            <h1 className="header-h1">Welcome to Book Club</h1>
            <img className="tree" alt="tree" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fthumbnails%2Ftree-triangular-shape-with-roots%20(1).svg?1513079789794" />
            <button onClick={this.handleConnect} className="connect">Connect</button>
            <div className="connect-buttons"> <Login /> <button className="btn-user">User1</button><button className="btn-user">User2</button></div>
            <button onClick={()=>smoothscroll(window.innerHeight,1000)} className="learn">Learn more</button>


          </div>
        </div>
        <div className="welcome-detail">
          <div className="w-heading"><h1>Core Features</h1></div>
          <div className="w-detail">
            <div className="icon-con ">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/155/155552.svg"/>
              </div>
              <h3>Search</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con ">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/14/14037.svg"/>
              </div>
              <h3>Add</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con ">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/642/642852.svg"/>
              </div>
              <h3>Discuss</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con ">
              <div className="image">
                <img alt="img" src="https://image.flaticon.com/icons/svg/88/88208.svg"/>
              </div>
              <h3>Star favourite</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="icon-con ">
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
              <div className="popup">
                <h1>React</h1>
                <p>React is openSource JavaScript library built and maintained by Facebook.
                React makes it painless to create interactive UIs.
                It's grate choice for creating FrontEnd of web app's.</p>
              </div>
              <img alt="box" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png" />
              <div className="box-desc">
                <h4>React</h4>
              </div>
            </div>
            <div className="tech-box tech-big">
              <div className="popup">
                <h1>NodeJS</h1>
                <p>NodeJS is an open source development platform for executing JavaScript code server-side. Node is often used for real-time applications such as chat, news feeds and web push notifications.</p>
              </div>
              <img alt="box" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
              <div className="box-desc">
                <h4>NodeJs</h4>
              </div>
            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>Redux</h1>
                <p>Redux is a predictable state container for JavaScript apps.
                It helps you write applications that behave consistently.
                Redux is best paired together with React.
                It is tiny (2kB, including dependencies).</p>
              </div>
              <img alt="box" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" />
              <div className="box-desc">
                <h4>Redux</h4>
              </div>

            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>Socket.io</h1>
                <p>Socket.IO enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed</p>
              </div>
              <img alt="box" src="http://devstickers.com/assets/img/pro/rd5f.png" />
              <div className="box-desc">
                <h4>Socket.io</h4>
              </div>
            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>Express</h1>
                <p>Express is a web application framework for Node.js. It is designed for building web applications and APIs. It is in fact the standard server framework for Node.js.</p>
              </div>
              <img alt="box" src="https://rishabh.io/recipes/img/004-express-js.png" />
              <div className="box-desc">
                <h4>Express</h4>
              </div>
            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>MongoDB</h1>
                <p>
                  MongoDB is an open source databes that uses a document-oriented data model.
                MongoDB uses JSON format for storing data. Collections contain sets of documents and functions as the equivalent of relational database tables.</p>
              </div>
              <img alt="box" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" />
              <div className="box-desc">
                <h4>MongoDb</h4>
              </div>
            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>GitHub</h1>
                <p>GitHub is a Web-based Git version control repository hosting service. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.</p>
              </div>
              <img alt="box" src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" />
              <div className="box-desc">
                <h4>GitHub</h4>
              </div>
            </div>
            <div className="tech-box">
              <div className="popup">
                <h1>Heroku</h1>
                <p>Heroku is a cloud platform as a service (PaaS) supporting several programming languages that is used as a web application deployment model</p>
              </div>
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
const store = (store) =>{
  return {
    user: store.user
  }
}

Welcome = connect(store)(Welcome)

export default Welcome
