import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import News from "../components/News";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Main />
			<div className="bg-[#D9E4EC] py-16 pb-0 absolute">
				<div className="cmn-m">
					<News />
				</div>
				<Footer />
			</div>
		</div>
	);
}
