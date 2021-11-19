import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		border: "1px solid",
		maxWidth: "600px",
		alignItems: "center",
		padding: "1rem",
		margin: "1rem auto",

		"& h5": {
			margin: "0.5rem",
		},
		"@media (max-device-width: 480px)": {
			display: "flex",
			flexDirection: "column",
		},
	},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		margin: "0 auto",
		padding: "0",
		"@media (max-device-width: 480px)": {
			display: "flex",
			flexDirection: "column",
			marginLeft: "0",
		},
	},
	header_right: {
		minWidth: "150px",
	},
});

const Drive = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>
				<div className={classes.header}>
					<h4 style={{ margin: "0" }}>Company Name: Persistent</h4>
					<h4 style={{ margin: "0", minWidth: "150px" }}>CTC : 4.71 LPA</h4>
				</div>
				<div className={classes.header}>
					<h5>Role: Software Engineer</h5>
					<h5 className={classes.header_right}>Location : Pune</h5>
				</div>
				<div className={classes.header}>
					<h5>
						Test Info: Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quas aut facere molestiae et beatae optio vitae nesciunt hic eaque,
						deserunt iste similique sapiente veniam iusto consequuntur delectus
						odio ratione. Atque.
					</h5>
					<h5 className={classes.header_right}>Test Date : 11/04/2022</h5>
				</div>
				<div className={classes.header}>
					<h5>
						Eligibility Criteria: <br />
						10th marks: 80% || 12th marks: 80% <br />
						Engineering CGPA: 8 || No of Backlogs: 0 <br />
						Gap in Education : 0
					</h5>
					<h5 className={classes.header_right}>
						<button>See All Details</button>
						<br />
						You are elgible
					</h5>
				</div>
			</div>
		</div>
	);
};

export default Drive;
