import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";
import NotFound from "./views/NotFound";
import Database from "./views/Database";
import CombinedDetails from "./views/details/CombinedDetails";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="wrapper">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/database" element={<Database />} />
							<Route path="/details/:category/:id" element={<CombinedDetails />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
