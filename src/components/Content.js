import React from 'react'
import "./Scss/content.scss"
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg"
import meet from "./images/client-meet.svg"
import maker from "./images/client-maker.svg"
import mainImage from "./images/image-hero-desktop.png"

function Content() {
  return (
    <main>
       <div className="leftSideOfContent">
        <h1>Make <br />remote work</h1>
        <p> Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="advertisementsDiv">
        <img src={databiz} alt="databiz advertisement" className="advertisement" ></img>
        <img src={audiophile} alt="audiophile advertisement" className="advertisement" ></img>
        <img src={meet} alt="meet advertisement" className="advertisement" ></img>
        <img src={maker} alt="maker advertisement" className="advertisement" ></img>
        </div>
       </div> 
       <div className="rightSideOfContent">
       <img src={mainImage} alt="databiz advertisement" className="mainImage" ></img>

       </div>
    </main>
  )
}

export default Content