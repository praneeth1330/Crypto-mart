import React from "react";
import Logo from "../assets/Union1.png";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";

export default function Footer() {
	return (
		<Slide bottom>
			<div className="bg-alfa text-delta transition-all duration-700">
				<div className="cmn-m py-16 lg:py-36">
					<div className=" grid lg:grid-cols-4 gap-7">
						<div className="">
							<div className="flex items-center gap-2">
								<img src={Logo} alt="" className="w-48" />
							</div>
						</div>
						<div className="2">
							<ul className="hh">
								<li>
									<NavLink to="/about">About us</NavLink>
								</li>
								<li>Events</li>
								<li>Terms & Conditions</li>
								<li>Privacy policy </li>
								<li>Service </li>
							</ul>
						</div>
						<div className="3">
							<ul className="hh">
								<li>Adoption & Community</li>
								<li>Block Chain</li>
								<li>Terms & Conditions</li>
								<li>Privacy policy </li>
								<li>Conntacts </li>
							</ul>
						</div>
						<div className="">
							<div className="flex gap-2 items-center">
								<h1 className="font-semibold">Email</h1>
								<input
									type="text"
									placeholder="your email"
									className="bg-transparent w-full border-[1px] h-10 rounded-lg"
								/>
							</div>
							<div className="social text-3xl flex items-center justify-between mx-10 my-2 pt-10">
								<i class="fa-brands fa-facebook"></i>
								<i class="fa-brands fa-instagram"></i>
								<i class="fa-brands fa-telegram"></i>
								<i class="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}
