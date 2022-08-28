import React from 'react'
import { Stack, Box } from "@mui/material"
import {VideoCard,ChannelCard} from "./index"

const Videos = ({ videos  , direction}) => {

  console.log("videos", videos)
  return (
    <Stack
      flexWrap="wrap"
      direction={direction || "row"}
      gap={3}
  justifyContent="center"
      display="flex"
    >
      {
        videos.map((item, idx) => {
          return <Box key={idx}>
            {item.id.videoId && <VideoCard
              video={item}
            />}
            {item.id.channelId && <ChannelCard
              channelDetail={item}
            />}
          </Box>
        })
      }
    </Stack>
  )
}

export default Videos