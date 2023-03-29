import React from "react";

export default function Cards(props) {
	return (
		<div className="  text-alfa my-7 transition-all duration-1000">
			<div className="">{props.key}</div>
			<div className=" flex items-center rounded-lg bg-delta h-[5rem] px-3 md:px-0 gap-2 flex-wrap  md:justify-evenly justify-between lg:py-3  ">
				<div className=" gap-2 flex items-center">
					<img src={props.image} className="w-10" alt="" />
					<h1>{props.name}</h1>
				</div>
				<h1>{props.price.toLocaleString()}</h1>

				{props.priceChange < 0 ? (
					<h1 className="red">{props.priceChange.toFixed(2)}</h1>
				) : (
					<h1 className="green">{props.priceChange.toFixed(2)}</h1>
				)}
			</div>
		</div>
	);
}
