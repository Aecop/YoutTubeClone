import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState("");
  const [titleT, setTitle] = useState(null);

  const { id } = useParams();
 
  

  // useEffect(() => {
  //   fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  //       .then((data) => {
  //         console.log(videoDetail);
  //         console.log(data.items[0].snippet)
  //         setVideoDetail(data.items[0])});
          
  // }, [id]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id]);
  
  

  // console.log(videoDetail)
  // if (videoDetail !== null && videoDetail.snippet !== null){
  //   const { snippet } = videoDetail;
  //   setTitle(JSON.parse(snippet));

  // } 

  // console.log(` test ${titleT}`)
  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount} } = videoDetail;

  // const detail = videoDetail.snippet.title
  // console.log(detail)


  return (
    <Box minHeight="95vh">
        <Stack direction={{ xs: 'colum', md:'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                
              </Typography>
            </Box>
          </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetail