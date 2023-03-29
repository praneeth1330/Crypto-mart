import React from "react";
import img4 from "../assets/img4.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import btc from "../assets/btc.jpg";
import sss from "../assets/sss.jpg";
import sc from "../assets/sc.jpg";
import gg from "../assets/gg.jpg";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import Slide from "react-reveal/Slide";

export default function News() {
	return (
		<div className=" grid  lg:grid-cols-3 items-center  h-[auto] w-full">
			<div className=" lg:col-span-2 mx-3 ">
				<Slide left>
					<div className="grid lg:grid-cols-2  gap-7 ">
						<div className="">
							<div className="lft  relative  ">
								<div className=" hover:scale-[102%] transition-all duration-500">
									<img src={img4} alt="" className="rounded-lg" />
								</div>
								<div className="absolute  bottom-2  font-bold text-white tracking-wide left-4  ">
									<h1 className=" rounded-lg  bg-slate-700 my-2 md:my-5 w-24 text-center">
										#news
									</h1>
									<h1 className=" md:text-3xl">
										New Bills Allow To Pay Crypto Taxes
									</h1>
									<h1 className="text-sm opacity-25 my-2">13/2/22</h1>
								</div>
							</div>
						</div>
						<div className="  ">
							<div className="relative mb-5   ">
								<div className=" hover:scale-[102%] transition-all duration-500">
									<img src={img2} alt="" className="rounded-lg" />
								</div>
								<div className="absolute  bottom-2  font-bold text-white tracking-wide left-4  ">
									<h1 className=" rounded-lg  bg-slate-700 my-2 md:my-5 w-24 text-center">
										#news
									</h1>
									<h1 className="">New Bills Allow To Pay Crypto Taxes</h1>
									<h1 className="text-sm opacity-25 my-2">13/2/22</h1>
								</div>
							</div>

							<div className=" relative  ">
								<div className=" hover:scale-[102%] transition-all duration-500">
									<img src={img3} alt="" className="rounded-lg" />
								</div>
								<div className="absolute  bottom-2  font-bold text-white tracking-wide left-4  ">
									<h1 className=" rounded-lg  bg-slate-700 my-2 md:my-5 w-24 text-center">
										#news
									</h1>
									<h1 className="">New Bills Allow To Pay Crypto Taxes</h1>
									<h1 className="text-sm opacity-25 my-2">13/2/22</h1>
								</div>
							</div>
						</div>
					</div>
					<div className=" my-16">
						<h1 className=" font-semibold text-alfa md:text-3xl">
							Mining Stories ____
						</h1>
						<div className=" grid lg:grid-cols-2 mt-7 gap-7">
							<div className="bg-white flex flex-col rounded-lg p-3">
								<div className="flex flex-col lg:flex-row  text-alfa text-xl font-semibold py-2 mt-5 items-center">
									<img
										src={a}
										alt=""
										className=" lg:w-28  lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25 ">12/2/22</h1>
									</div>
								</div>

								<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold py-2 mt-5 items-center">
									<img
										src={b}
										alt=""
										className="lg:w-28 lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25 ">12/2/22</h1>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold py-2 mt-5 items-center">
									<img
										src={c}
										alt=""
										className="lg:w-28 lg:h-28   hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25 ">12/2/22</h1>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold py-2 mt-5 items-center">
									<img
										src={d}
										alt=""
										className="lg:w-28 lg:h-28  hover:scale-[102%] transition-all duration-500 rounded-lg mx-1"
									/>
									<div className=" mx-2">
										<h1>
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25 ">12/2/22</h1>
									</div>
								</div>
							</div>
							<div className="">
								<div
									className="
                              bg-white rounded-lg pb-5 "
								>
									<div className=" hover:scale-[102%] transition-all duration-500">
										<img src={e} alt="" className="rounded-lg" />
									</div>
									<div className=" ">
										<h1 className="green mx-2">#mining</h1>
										<h1 className=" text-alfa mx-3 font-semibold">
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25   mx-3">12/2/22</h1>{" "}
									</div>
								</div>

								<div
									className="
                              bg-white rounded-lg mt-7 pb-5 "
								>
									<div className=" hover:scale-[102%] transition-all duration-500">
										<img src={f} alt="" className="rounded-lg" />
									</div>
									<div className=" ">
										<p className="green mx-2">#mining</p>
										<h1 className=" text-alfa mx-3 font-semibold">
											South Asian Airlines are About to Launch Blockhain Payment
										</h1>
										<h1 className="text-sm opacity-25   mx-3">12/2/22</h1>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="">
							<h1 className=" font-semibold text-alfa md:text-3xl">
								Latest News ____
							</h1>
						</div>
						<div className=" bg-white rounded-lg ">
							<div className="flex  flex-col lg:flex-row text-alfa text-xl font-semibold  mt-5 items-center ">
								<img
									src={d}
									alt=""
									className="news rounded-lg  hover:scale-[102%] transition-all duration-500"
								/>
								<div className=" ml-5">
									<div className=" flex gap-2 items-center">
										<h1 className="green"> #latest</h1>

										<h1 className="text-sm opacity-25 ">12/2/22</h1>
									</div>
									<h1>
										South Asian Airlines are About to Launch Blockhain Payment
									</h1>
									<p className="text-[#C3CEDA] text-sm font-light">
										On one hand, it seems that we absolutely do not need the
										cryptocurrency boom that is happening right
									</p>
								</div>
							</div>
						</div>

						<div className=" bg-white rounded-lg ">
							<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold  mt-5 items-center ">
								<img
									src={a}
									alt=""
									className="news  rounded-lg  hover:scale-[102%] transition-all duration-500"
								/>
								<div className=" md:ml-5">
									<div className=" flex gap-2 items-center">
										<h1 className="green"> #latest</h1>

										<h1 className="text-sm opacity-25">12/2/22</h1>
									</div>
									<h1>
										South Asian Airlines are About to Launch Blockhain Payment
									</h1>
									<p className="text-[#C3CEDA] text-sm font-light">
										On one hand, it seems that we absolutely do not need the
										cryptocurrency boom that is happening right
									</p>
								</div>
							</div>
						</div>

						<div className=" bg-white rounded-lg ">
							<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold  mt-5 items-center ">
								<img
									src={b}
									alt=""
									className="news rounded-lg  hover:scale-[102%] transition-all duration-500"
								/>
								<div className=" ml-5">
									<div className=" flex gap-2 items-center">
										<h1 className="green"> #latest</h1>

										<h1 className="text-sm opacity-25">12/2/22</h1>
									</div>
									<h1>
										South Asian Airlines are About to Launch Blockhain Payment
									</h1>
									<p className="text-[#C3CEDA] text-sm font-light">
										On one hand, it seems that we absolutely do not need the
										cryptocurrency boom that is happening right
									</p>
								</div>
							</div>
						</div>

						<div className=" bg-white rounded-lg ">
							<div className="flex flex-col lg:flex-row text-alfa text-xl font-semibold  mt-5 items-center ">
								<img
									src={c}
									alt=""
									className="news rounded-lg  hover:scale-[102%] transition-all duration-500"
								/>
								<div className=" ml-5">
									<div className=" flex gap-2 items-center">
										<h1 className="green"> #latest</h1>

										<h1 className="text-sm opacity-25">12/2/22</h1>
									</div>
									<h1>
										South Asian Airlines are About to Launch Blockhain Payment
									</h1>
									<p className="text-[#C3CEDA] text-sm font-light">
										On one hand, it seems that we absolutely do not need the
										cryptocurrency boom that is happening right
									</p>
								</div>
							</div>
						</div>
					</div>
				</Slide>
			</div>
			<div className="flex  items-center mt-7 mx-3 ">
				<div className="mx-2">
					<Slide right>
						<div className="  ">
							<img
								src={btc}
								alt=""
								className="rounded-lg  hover:scale-[102%] transition-all duration-500"
							/>
						</div>
					</Slide>
					<Slide right>
						<div className="my-7 bg-white rounded-lg  hover:scale-[102%] transition-all duration-500">
							<h1 className=" font-semibold text-alfa md:text-2xl mx-3 py-5">
								Trending News ____
							</h1>
							<div className=" px-3 py-4">
								<h1>
									South Asian Airlines are About to Launch Blockhain Payment
								</h1>
								<p className="text-[#C3CEDA] text-sm font-light">
									On one hand, it seems that we absolutely do not need the
									cryptocurrency boom that is happening right
								</p>
							</div>
							<div className=" px-3 py-4">
								<h1>
									South Asian Airlines are About to Launch Blockhain Payment
								</h1>
								<p className="text-[#C3CEDA] text-sm font-light">
									On one hand, it seems that we absolutely do not need the
									cryptocurrency boom that is happening right
								</p>
							</div>
							<div className=" px-3 py-4">
								<h1>
									South Asian Airlines are About to Launch Blockhain Payment
								</h1>
								<p className="text-[#C3CEDA] text-sm font-light">
									On one hand, it seems that we absolutely do not need the
									cryptocurrency boom that is happening right
								</p>
							</div>
						</div>
					</Slide>
					<Slide right>
						<div className="">
							<img
								src={sss}
								alt=""
								className="rounded-lg  hover:scale-[102%] transition-all duration-500"
							/>
						</div>
					</Slide>
					<Slide right>
						<div className="">
							<img
								src={sc}
								alt=""
								className="rounded-lg my-7  hover:scale-[102%] transition-all duration-500"
							/>
						</div>
					</Slide>
					<Slide right>
						<div className="">
							<img
								src={gg}
								alt=""
								className="rounded-lg my-7  hover:scale-[102%] transition-all duration-500"
							/>
						</div>
					</Slide>
				</div>
			</div>
		</div>
	);
}
