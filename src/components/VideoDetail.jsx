import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  
 
  // useEffect(() => {
  //   fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  //       .then((data) => {
  //         console.log(videoDetail);
  //         console.log(data.items[0].snippet)
  //         setVideoDetail(data.items[0])});
          
  // }, [id]);

  useEffect(() => {
    
    if(id){
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0])});
      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
    }
  }, [id]);
   
  // console.log(videoDetail)
  if (videoDetail !== null){
    const {snippet: {title, channelId, channelTitle}, statistics:{ viewCount, likeCount} } = videoDetail;
    console.log(title)
 
    return ( 
      <Box minHeight="95vh">
          <Stack direction={{ xs: 'colum', md:'row' }}>
            <Box flex={1}>
              <Box sx={{ width: '100', position: 'sticky', top: '86px'}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {title}
                    <Stack direction="row" justifyContent="space-between" sx={{ color:'#fff'}} py={2} px={2}>
                      <Link to={`/channel/${channelId}`}>
                        <Typography variant={{ sm: 'subtitle1', md:'h6'}} color="#fff">
                          {channelTitle}
                          <CheckCircle sx={{ fontsize: '10px', color:'gray', ml:'3px', mt:'8px'}}/>
                        </Typography>
                      </Link>
                      <Stack direction="row" gap="15px">
                        <Typography variant="body1" sx={{ opacity: 0.8}}>
                          {parseInt(viewCount).toLocaleString()} views
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8}}>
                          {parseInt(likeCount).toLocaleString()} likes
                        </Typography>
                      </Stack>
                    </Stack>
                </Typography>
              </Box>
            </Box>
            <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column"/>
            </Box>
          </Stack>
      </Box>
    )
  }
}

export default VideoDetail