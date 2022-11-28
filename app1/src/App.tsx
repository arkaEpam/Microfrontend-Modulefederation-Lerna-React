import React from "react";
import PageOne from "./pages/SkillReview";
import { Button } from 'shared';
import { BrowserRouter, Route, Link, Routes} 
from "react-router-dom";
import SkillPage from "./pages/SkillPage";

const App = () => (
	<BrowserRouter>
    	<Routes>
      		<Route path="/" element={ <PageOne/>} />
      		<Route path="/skill/:technology/:id" element={<SkillPage />} />
    	</Routes>
	</BrowserRouter>
);

export default App;
