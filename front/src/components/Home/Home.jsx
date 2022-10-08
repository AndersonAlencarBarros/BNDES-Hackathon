import React from "react";

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Home() {
	return (
		<div>
			<CssBaseline />
			<Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
				<Typography variant="h2" component="h1" gutterBottom>
					ChatBot
				</Typography>
				<Typography variant="h5" component="h2" gutterBottom>
					Microcrédito
				</Typography> 
			</Container>
		</div>
	);
}

export default Home;
