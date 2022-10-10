import * as React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import cred from "../../assets/cred.png";

export default function TitlebarImageList() {
	return (
		<Container>
			<div className="mb-5">
				<img src={cred} alt="logo" width="400" />

				<Typography variant="h5" component="h2" className="fw-light">
					O crédito para potencializar o jovem empreendedor.
				</Typography>
			</div>

			<div className="row">
				<div className="col-4">
					<a target={"_blank"} href="http://t.me/AylaBNDESBot">
						<Button
							variant="contained"
							startIcon={<ChatBubbleIcon />}
							size="large"
						>
							Ayla Chatbot
						</Button>
					</a>
				</div>
			</div>
			<div className="mt-5">
				<Typography className="fs-1 text fw-light">
					Oferecer microcrédito para potencializar jovens
					empreendedores não só de modo financeiro, mas de modo
					educacional.
				</Typography>
			</div>
			 
		</Container>
		// <ImageList sx={{ width: "100%", height: 500, padding: 10, }}>
		//   <ImageListItem  cols={2}>
		//     <ListSubheader component="div" sx={{color:"#b0b21f", fontSize: 32, fontWeight: 'bold'}}> Qual atividade remunerada você atua ou gostaria de atuar?</ListSubheader>
		//   </ImageListItem>
		//   {itemData.map((item) => (
		//     <ImageListItem key={item.img}>
		//       <img
		//         src={`${item.img}?w=248&fit=crop&auto=format`}
		//         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
		//         alt={item.title}
		//         loading="lazy"
		//       />
		//       <ImageListItemBar
		//         title={item.title}
		//         subtitle={item.author}
		//         actionIcon={
		//           <IconButton
		//             sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
		//             aria-label={`info about ${item.title}`}
		//           >
		//             <InfoIcon />
		//           </IconButton>
		//         }
		//       />
		//     </ImageListItem>
		//   ))}
		// </ImageList>
	);
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Decorações",
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Hamburger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Fotografia",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Cafeteria",
		cols: 2,
	},
];
