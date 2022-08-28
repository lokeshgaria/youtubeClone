import React, { useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import { Videos } from './index'
import { fetchFromApi } from "../utils/fetchDatafrom"
import { useParams } from 'react-router-dom'

const Feed = () => {

const {searchterm} = useParams();

  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchterm}`).then((res) => {
      setVideos(res.items)
    })
  }, [searchterm])
  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2  , background:"#000"}}
    >
      <Typography
        variant='h4'
        fontWeight="bold"
        mb={2}
        sx={{
          color: "#fff"
        }}
      >
       Search Results for :  <span style={{ color: "#F31503" }}>  {searchterm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default Feed