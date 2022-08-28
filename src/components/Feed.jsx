import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from './index'
import {fetchFromApi} from "../utils/fetchDatafrom"

const Feed = () => {
 
  const [selectedCategory , setSelectedCategory] = useState("New");
  const [videos ,setVideos] = useState([])
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((res) =>{
      setVideos(res.items)
    })
  },[selectedCategory])
  return (
    <Stack
      component={Box}

      sx={{ flexDirection: { sx: "column", md: "row" }, background: "#000" }}
    >
      <Box
        sx={{  minWidth:"200px",  height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d ", px: { sx: 0, md: 2 } }}
      >
        <Sidebar
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: "#fff" }}

        >
          copyright 20202 lgm
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography
          variant='h4'
          fontWeight="bold"
          mb={2}
          sx={{
            color: "#fff"
          }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed