import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PrimaryHeader from "./components/PrimaryHeader";
import AllDrives from "./components/AllDrives";
import AppliedDrives from "./components/AppliedDrives";
import Footer from "./components/Footer";
import ResumeBuilder from "./components/ResumeBuilder";
import Profile from "./components/Profile";
function App() {
	return (
		<div>
			<PrimaryHeader />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/signin" element={<SignIn />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route exact path="/alldrives" element={<AllDrives />} />
				<Route exact path="/applieddrives" element={<AppliedDrives />} />
				<Route exact path="/resumebuilder" element={<ResumeBuilder />} />
				<Route exact path="/profile/:id" element={<Profile />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
