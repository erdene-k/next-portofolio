"use client"
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import IsometricModel from "./models/IsometricModel";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = () => {
  const [isRotating, setRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = [5.5, 5.5, 5.5];
    const screenPos = [0, 0, -100];
    let rotation = [0.5, -0.8, 0];
    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    // } else {
    //   screenScale = [1, 1, 1];
    // }
    return [screenScale, screenPos, rotation];
  };

  const [screenScale, screenPos, rotation] = adjustIslandForScreenSize();

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <section className="home-page">
        <div className="canvas-content">
          {/* <Suspense fallback={<Loader />}>   </Suspense>*/}


        
            <p  className="info-text">
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam perspiciatis veritatis commodi ducimus
              quaerat qui quas? Consectetur harum ipsam excepturi qui
              voluptatibus accusamus, repellendus fugit! Dolorum doloribus omnis
              possimus laboriosam. amet consecte Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aperiam eveniet nam fuga
              reiciendis, harum ab quis atque neque quibusdam veniam beatae
              porro incidunt nihil cupiditate explicabo earum quia! Sapiente,
              non!tur adipisic Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus amet fugiat ratione beatae illum quam
              reiciendis architecto atque dignissimos. Est autem, voluptatem
              amet necessitatibus aut excepturi odio odit distinctio earum!ing
              elit. Officiis repellendus totam, quaerat sit corporis a culpa
              eveniet sed ex voluptate quasi explicabo cupiditate incidunt
              nesciunt vitae. Numquam reprehenderit debitis sapiente? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
              minus numquam! Unde molestias, impedit voluptate cumque, fugit
              possimus laborum quidem voluptatem, repellat alias perspiciatis
              illo tempore dolore explicabo nemo.
            </p>
         
        </div>

      


	<div className="section full-height over-hide px-4 px-sm-0">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div className="section mx-auto text-center slider-height-padding">
			          	<input className="checkbox frst" type="radio" id="slide-1" name="slider" />
			          	<label htmlFor="slide-1"></label>
			          	<input className="checkbox scnd" type="radio" name="slider" id="slider-2"/>
			          	<label htmlFor="slider-2"></label>
			          	<input className="checkbox thrd" type="radio" name="slider" id="slider-3"/>
			          	<label htmlFor="slider-3"></label>
			          	<input className="checkbox foth" type="radio" name="slider" id="slider-4"/>
			          	<label htmlFor="slider-4"></label>
						<ul>
							<li>
								<span>MALE GOOFY FACE</span>
						    </li>
							<li>
								<span>TOY PIG</span>
						    </li>
							<li>
								<span>SHY PORTRAIT</span>
						    </li>
							<li>
								<span>SKATEBOARD FACE</span>
						    </li>
					    </ul>
				    </div>
			    </div>
	      	</div>
	    </div>
	</div>
      </section>
      <div id="gg" style={{ backgroundColor: "red", height: 100 }}></div>
    </BrowserRouter>
  );
};

export default Home;
