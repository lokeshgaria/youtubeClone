import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import {Feed,ChannelDetail,VideoDetail,SearchTerm,Navbar} from "./components"
const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
            <Routes>
                <Route exact path="/"  element={<Feed />} />
                <Route exact path="/channel/:channel"  element={<ChannelDetail />} />
                <Route exact path="/video/:videoId"  element={<VideoDetail />} />
                <Route exact path="/search/:searchterm"  element={<SearchTerm />} />
            </Routes> 
            </Box>
        </BrowserRouter>
    )
}

export default App