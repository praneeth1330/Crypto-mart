import React from "react";
import video from "../assets/new.mp4";
import ceo from "../assets/cc.jpg";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";
import Slide from "react-reveal/Slide";

export default function Abt() {
	return (
		<div className="bg-[#D9E4EC]">
			<div className="text-alfa cmn-m py-16">
				<h1 className="text-center text-xl lg:text-3xl">About</h1>
				<div className="">
					<div className="grid md:grid-cols-2 my-16 gap-7">
						<Slide left>
							<div className="">
								<h1 className="font-bold tracking-widest lg:text-3xl my-10">
									OUR MISSION ___
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
									officiis laboriosam aliquam tenetur, <br />
									dolores corrupti a adipisci at alias accusamus sapiente harum
									obcaecati mollitia accusantium consequatur facere, fugit iusto
									placeat.
								</p>
							</div>
						</Slide>
						<div className=" grid lg:grid-cols-3 my-2 gap-4 w-full">
							<Slide right>
								<div className=" flex flex-col items-center justify-center bg-white rounded-lg p">
									<div className=" text-5xl">
										<i class="fa-solid fa-chart-simple"></i>
									</div>
									<h1 className="lg:text-xl"> Top Strategies</h1>
								</div>
								<div className=" flex flex-col items-center justify-center bg-white rounded-lg">
									<div className=" text-5xl">
										<i class="fa-sharp fa-solid fa-magnifying-glass-chart"></i>
									</div>
									<h1 className="lg:text-xl"> Search Analysis</h1>
								</div>
								<div className=" flex flex-col items-center justify-center bg-white rounded-lg">
									<div className=" text-5xl">
										<i class="fa-brands fa-bitcoin"></i>
									</div>
									<h1 className="lg:text-xl"> Data Processing</h1>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			</div>
			<div className="cmn-m pb-16 relative">
				<div className=" h-[25rem] ">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="h-full w-full object-cover rounded-lg"
					>
						<source src={video} type="video/mp4" />
					</video>
				</div>
				<div className="absolute top-[30%] left-[25%] text-alfa font-bold text-5xl">
					<h1>Reasons to work with us</h1>
				</div>
			</div>
			<div className="cmn-m">
				<div className=" grid lg:grid-cols-2 gap-7">
					<Slide left>
						<div className="">
							<h1 className="text-3xl  text-alfa pb-16">
								What Did We Purchase ___
							</h1>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Dolorum eius ad laborum sunt ex possimus! Deleniti, blanditiis
								eaque cumque molestias quasi fugiat fugit iusto, nisi magnam
								architecto laboriosam, illum repellat. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Facere illum earum ea
								deserunt cumque excepturi quo ipsam, dignissimos aliquam dolores
								neque non dolore adipisci? <br /> Ab odit corrupti iure quaerat,
								necessitatibus recusandae, provident omnis, cupiditate suscipit
								voluptate repellendus ex blanditiis sed possimus dignissimos ea
								facilis doloremque. Maxime quae br bg bg <br /> facilis quaerat
								temporibus, id corporis inventore totam cum natus enim obcaecati
								ellat consectetur provident. Ipsum fugiat repudiandae aut sunt?
								Volupta
							</p>
						</div>
					</Slide>
					<Slide right>
						<div className=" bg-white py-10 px-5 rounded-lg">
							<h1 className="text-3xl  text-alfa pb-16">
								What People Say About Us ___
							</h1>
							<div className="text-alfa ">
								<i class="fa-solid fa-hand-dots"></i>
								<h1 className="py-10">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deserunt labore nulla cum repellat, numquam suscipit ipsa
									laboriosam repudiandae sequi iure, id sint adipisci aspernatur
									officia. Nulla adipisci sint consequuntur cupiditate?
								</h1>
							</div>
						</div>
					</Slide>
				</div>
			</div>

			<div className="cmn-m py-16">
				<h1 className="font-bold tracking-widest lg:text-3xl my-10">
					OUR Team ___
				</h1>
				<div className="grid lg:grid-cols-3 gap-7 text-alfa ">
					<div className="parent">
						<img src={ceo} alt="" className="" />
						<div className="mask text-center rounded-lg bg-white w-[200px]">
							<h1>Kristin Watson</h1>
							<p className="text-xs my-3 ">Director</p>
							<div className="social text-3xl flex items-center justify-between mx-10 my-2">
								<i class="fa-brands fa-facebook"></i>
								<i class="fa-brands fa-instagram"></i>
								<i class="fa-brands fa-telegram"></i>
								<i class="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
					<div className="parent">
						<img src={h} alt="" className="" />
						<div className="mask text-center rounded-lg bg-white w-[200px]">
							<h1>Albert Flores</h1>
							<p className="text-xs my-3">Systems Engineer</p>
							<div className="social text-3xl flex items-center justify-between mx-10 my-2">
								<i class="fa-brands fa-facebook"></i>
								<i class="fa-brands fa-instagram"></i>
								<i class="fa-brands fa-telegram"></i>
								<i class="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
					<div className="parent">
						<img src={i} alt="" className="" />
						<div className="mask text-center rounded-lg bg-white w-[200px]">
							<h1>Jenny Wilson</h1>
							<p className="text-xs my-3">Web Analytics Developer</p>
							<div className="social text-3xl flex items-center justify-between mx-10 my-2">
								<i class="fa-brands fa-facebook"></i>
								<i class="fa-brands fa-instagram"></i>
								<i class="fa-brands fa-telegram"></i>
								<i class="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
