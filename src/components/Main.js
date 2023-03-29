import React, { useEffect, useState } from "react";
import Tech from "../assets/tech.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Cards from "./Cards";
import axios from "axios";

import Slide from "react-reveal/Slide";

export default function Main() {
	const [coins, setCoins] = useState();

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
			)
			.then((res) => {
				setCoins(res?.data);
			});
	}, []);

	const card = coins?.map((coin) => {
		return (
			<Cards
				key={coin.id}
				image={coin.image}
				name={coin.name}
				price={coin.current_price}
				priceChange={coin.price_change_percentage_24h}
			/>
		);
	});

	return (
		<div>
			<div
				className="cmn-m pt-20
            "
			>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mx-2">
					<Slide left>
						<div className="lft md:col-span-2 relative  ">
							<div className=" hover:scale-[102%] transition-all duration-500">
								<img src={Tech} alt="" className="rounded-lg " />
							</div>
							<div className="absolute  bottom-2 md:bottom-10 font-bold text-white left-4  ">
								<h1 className=" rounded-lg  bg-slate-700 my-2 md:my-5 w-24 text-center">
									#news
								</h1>
								<h1 className=" md:text-3xl">
									New Bills Allow To Pay Crypto Taxes
								</h1>
								<h1 className="text-sm my-2">13/2/22</h1>
							</div>
						</div>
					</Slide>
					<Slide right>
						<div className="right">
							<div className=" ">
								<div className=" flex justify-between  mb-7 ">
									<div className=" flex items-center justify-center w-full">
										<h1 className="py-2 w-full bg-alfa text-gama  text-center rounded-lg">
											Hot News
										</h1>
									</div>
									<h1 className="py-2 w-full  text-center hover:bg-alfa hover:text-gama rounded-lg bg-delta">
										Most Commented
									</h1>
								</div>

								<div className="flex  text-alfa text-xl flex-col lg:flex-row font-semibold py- mt-7 items-center">
									<img
										src={img1}
										alt=""
										className="lg:w-28 lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1 "
									/>
									<div className=" mx-2">
										<h1>Social Meadia has Baned Crypto Currency</h1>
										<p className="text-sm opacity-25">12/2/22</p>
									</div>
								</div>
								<div className="flex  text-alfa text-xl flex-col lg:flex-row font-semibold py-2 mt-7 items-center">
									<img
										src={img2}
										alt=""
										className="lg:w-28 lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<p className="text-sm opacity-25">12/2/22</p>
									</div>
								</div>
								<div className="flex  text-alfa text-xl  flex-col lg:flex-row font-semibold py-2 mt-7 items-center">
									<img
										src={img3}
										alt=""
										className="lg:w-28 lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											Global Coin Offering and the Investments that Are at Risk
											Today
										</h1>
										<p className="text-sm opacity-25">12/2/22</p>
									</div>
								</div>
							</div>
						</div>
					</Slide>
				</div>
				<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 flex-wrap mx-2 my-10">
					<Slide bottom>{card}</Slide>
				</div>
			</div>
		</div>
	);
}
