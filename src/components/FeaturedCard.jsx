import { Button, Card, CardActions, CardContent,Typography } from '@mui/material'
import React from 'react'
import '../style.css';
export default function FeaturedCard() {
  return (
    <div className='cover'>
      <Card  >
        <CardContent>
            <Typography>Title: Blog title</Typography>
            <Typography variant='h5'>
            Passengers transiting through Hamad International Airport in Qatar’s capital can choose to leave the airport and join a free tour of some of the capital’s most famous attractions, including Souq Waqif and the Golden Masjid. 
            </Typography>
        </CardContent>
        <CardActions>
          <Button variant='text'>
            Click here
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
