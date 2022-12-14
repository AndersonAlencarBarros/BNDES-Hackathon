import React from "react";

// MUI 
import Box from "@mui/material/Box"; 
import Container from "@mui/material/Container"; 

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ButtonInit from "./components/Button/Button";
import AccountMenu from "./components/Menu/Menu";
import Cadastrar from "./container/Cadastro/Cadastro";
import Quest from "./container/Quest/Quest";
import QuestSim from "./container/QuestSim/QuestSimjsx";

import { Navigate, Route, Routes } from "react-router-dom";

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
		</Box>
	);
}

export default App;
