import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
const theme = createTheme();

export default function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		if (email === "" || password === "" || name === "") {
			alert("Please enter all feilds");
		} else {
			console.log({ email, password, name });
			window.location.href = "/signin";
		}
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	return (
		<ThemeProvider theme={theme}>
			<Container
				component="main"
				maxWidth="xs"
				style={{ marginBottom: "5rem" }}
			>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						{/* <LockOutlinedIcon /> */}
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									label="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									label="Email Address"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									label="Password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									<RouterLink to="/signin">
										{" "}
										Already have an account? Sign in
									</RouterLink>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{/* <Copyright sx={{ mt: 5 }} /> */}
			</Container>
		</ThemeProvider>
	);
}
