import React from "react";

// MUI 
import Box from "@mui/material/Box"; 

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Home />

			<Footer />
		</Box>
	);
}

export default App;
