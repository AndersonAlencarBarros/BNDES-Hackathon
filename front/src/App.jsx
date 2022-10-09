import React from "react";

// MUI 
import Box from "@mui/material/Box"; 

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ButtonInit from "./components/Button/Button";
import AccountMenu from "./components/Menu/Menu";
import Cadastrar from "./container/Cadastro/Cadastro";
import Quest from "./container/Quest/Quest";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<AccountMenu />
			<Home />
			<ButtonInit/>
			<Footer />
			<Cadastrar />
			<Quest />
		</Box>
	);
}

export default App;
