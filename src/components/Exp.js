import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from "react-reveal/Slide";

export default function Exp() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const filteredCoins = coins?.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<div className="bg-[#D9E4EC] py-16">
				<div className=" mx-3 md:mx-36 lg:mx-48 text-alfa">
					<h1 className="text-center text-xl lg:text-3xl">Explore</h1>

					<div className="">
						<div className="">
							<div className=" my-11 lg:my-24">
								<form className="flex items-center ">
									<input
										type="text"
										onChange={handleChange}
										placeholder="Search"
										className=" m-auto border-b-2 bg-transparent focus:outline-none border-delta w-2/4"
									/>
								</form>
							</div>
							<div className="mx-2  mt-3">
								<div className="grid grid-cols-5 gap-5 text-[9px] md:text-md lg:text-lg  items-center border-b-2 py-2 px-2 border-delta ">
									<Slide bottom>
										<h1>coin</h1>
										<h1 className="">Mrk cap($)</h1>
										<h1>price($)</h1>
										<h1>24h(H)($) </h1>
										<h1>24h Mrk Cap Change</h1>
									</Slide>
								</div>
								<div className="">
									{filteredCoins?.map((coin) => {
										return (
											<div
												className="grid grid-cols-5 gap-5 items-center border-b-2 py-2 text-[9px] md:text-md lg:text-lg border-delta h-[3rem] lg:h-auto "
												key={coin.id}
											>
												<Slide bottom>
													<div className=" flex items-center gap-1">
														<img src={coin.image} className="w-[20px]" alt="" />
														<div className="flex gap-1 items-center  flex-wrap ">
															<h1>{coin.name}</h1>
														</div>
													</div>
													<div className=" flex items-start w-auto ">
														<h1>$ {coin.market_cap.toLocaleString()}</h1>
													</div>
													<div className=" ">
														<div className="">
															<h1>$ {coin.current_price.toLocaleString()}</h1>
														</div>
														<div className="flex text-[7px] lg:text-sm  flex-wrap ">
															<div className="">
																{coin.price_change_24h < 0 ? (
																	<h1 className="red">
																		{coin.price_change_24h.toFixed(2)}{" "}
																	</h1>
																) : (
																	<h1 className="green">
																		{coin.price_change_24h.toFixed(2)}{" "}
																	</h1>
																)}
															</div>
															<div className="">
																{coin.price_change_percentage_24h < 0 ? (
																	<h1 className="red">
																		(
																		{coin.price_change_percentage_24h.toFixed(
																			2
																		)}
																		%){" "}
																	</h1>
																) : (
																	<h1 className="green">
																		(
																		{coin.price_change_percentage_24h.toFixed(
																			2
																		)}{" "}
																		%){" "}
																	</h1>
																)}
															</div>
														</div>
													</div>
												</Slide>
												<Slide bottom>
													<div className="">
														<h1>$ {coin.high_24h.toLocaleString()}</h1>
													</div>
												</Slide>
												<Slide bottom>
													<div className="">
														{coin.market_cap_change_percentage_24h < 0 ? (
															<h1 className="red">
																(
																{coin.market_cap_change_percentage_24h.toLocaleString()}
																%)
															</h1>
														) : (
															<h1 className="green">
																(
																{coin.market_cap_change_percentage_24h.toLocaleString()}
																%)
															</h1>
														)}
													</div>
												</Slide>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
