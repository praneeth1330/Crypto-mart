import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Union1.png";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	function handleClick() {
		setOpen(!open);
	}

	return (
		<div className="cmn-m ">
			<nav className="flex justify-between items-center text-alfa py-2 my-12">
				<div className=" flex items-center gap-2 cmn-txt justify-center">
					<div className="w-10">
						<img src={Logo} alt="" />
					</div>
					<h1>Crypto Mart</h1>
				</div>

				<ul
					className={`  lg:flex lg:items-center lg:pb-0 pb-5  absolute lg:static
                 bg-white  lg:z-auto z-30 left-0 w-full lg:w-auto cmn-txt  font-[Poppins] gap-5 
                 
                 lg:pl-0 px-36 text-center lg:text-end transition-all duration-500 lg:transition-none lg:duration-[0] ease-in ${
										open ? "top-24 opacity-100" : "top-[-490px] "
									}lg:opacity-100 
                 `}
				>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/explore">Explore</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<div className="text-xl">
						<i class="fa-regular fa-user"></i>
					</div>
				</ul>

				<div
					onClick={handleClick}
					className=" text-2xl   cursor-pointer lg:hidden text-orange-600 z-50"
				>
					<i class={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
				</div>
			</nav>
		</div>
	);
}
