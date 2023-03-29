import React from "react";

export default function Cnct() {
	return (
		<div className="bg-[#D9E4EC] py-16">
			<div className="cmn-m text-alfa ">
				<h1 className="text-center text-xl lg:text-3xl">Contact</h1>
				<div className="my-16 grid lg:grid-cols-3 gap-7">
					<div className="bg-white rounded-lg py-10 ">
						<div className="mx-3">
							<h1 className="text-2xl pb-10 font-bold">Contact Info</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deserunt ipsum animi fugiat expedita blanditiis accusantium
								ducimus unde facere sit nobis! Animi soluta cumque quidem ad
								ducimus quia deserunt debitis delectus.
							</p>
						</div>
						<div className="py-10 mx-3">
							<h1 className="text-2xl font-bold ">Email</h1>
							<p>info@cryptomart.com</p>
						</div>
						<div className=" mx-3">
							<h1 className="text-2xl font-bold">Email :</h1>
							<div className="social  flex items-center   justify-between px-10 py-2 ">
								<div className="text-3xl hover:text-2xl">
									<i class="fa-brands fa-facebook"></i>
								</div>
								<div className="text-3xl hover:text-2xl">
									<i class="fa-brands fa-instagram"></i>
								</div>
								<div className="text-3xl hover:text-2xl">
									<i class="fa-brands fa-telegram"></i>
								</div>
								<div className="text-3xl hover:text-2xl">
									<i class="fa-brands fa-linkedin"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 bg-white rounded-lg">
						<div className=" py-10 mx-10">
							<h1 className="text-2xl pb-10 font-bold">Leave Comment ...</h1>

							<form className="pb-10">
								<div className="lg:flex justify-between flex-col lg:flex-row  ">
									<input
										type="text"
										placeholder="My Name"
										className="lg:w-[20rem] h-12 border-[1px] my-3 px-3 border-black rounded-lg placeholder:mx-3"
									/>
									<input
										type="text"
										placeholder="My email"
										className="lg:w-[20rem] h-12 border-[1px] my-3 px-3 border-black rounded-lg py-4 "
									/>
								</div>
								<textarea
									type="text"
									placeholder="what's on your mind?"
									className=" w-full border-[1px] border-black h-28 py-2 px-3 my-10 rounded-lg "
								/>
								<div
									type="submit"
									className=" bg-gama p-2 absolute  rounded-lg"
								>
									Submit
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
