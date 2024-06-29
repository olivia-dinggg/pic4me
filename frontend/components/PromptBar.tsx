import { Box, LinearProgress, Typography } from '@mui/material';
import React from 'react'

const PromptBar = () => {
  const [data, setData] = React.useState({
    category: 'none',
    prompt: 'There is no promp at the moment. Good Work!'
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/prompt');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const categoryToImage = (category: string) => {
    switch (category) {
      case "physical":
        return '../assets/images/exercise.png'
      default:
        return '../assets/images/thumbs-up.png'
    }
  }
  var border = data.category === "none" ? 'none' : '3px outset #f2b022'
  return (
    <Box sx={{
      bgcolor: '#121212',
      border: border,
      height: '12vh',
      width: '100vw',
      mb: '2vh',
      display: 'inline-flex',
      alignContent: 'center',
    }}>
      <img src={categoryToImage(data.category)} style={{ margin: '25px', marginLeft: 'auto' }}></img>
      <Typography sx={{ my: 'auto', mr: 'auto' }}> {data.prompt} </Typography>
    </Box>
  )
}

export default PromptBar