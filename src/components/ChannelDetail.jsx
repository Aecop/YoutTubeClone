import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  console.log(channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippets&id=${id}`).then((data) => setChannelDetail(data.item[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data.item));
  }, [id])

 
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,9,121,1) 55%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
        }}
        />
         <ChannelCard channelDetail={channelDetail}/>  
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>

  )
}

export default ChannelDetail