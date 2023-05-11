import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material';
// import GitHubIcon from '@material-ui/icons/GitHub';

import React from 'react'
import '../style.css';
function PostCard(props) {
  return (
    


   <Grid item xs={12} sm={6} md={6}>
<CardActionArea component="a" href='#'>
<Card className='card'>
    <div className='cardDetails'>
<CardContent>
    <Typography component="h2" variant='h5'>
{props.post.title}
    </Typography>
    <Typography color="secondary" variant='subtitle1'>
{props.post.date}
    </Typography>
    <Typography color="secondary" variant='subtitle1' paragraph>
{props.post.description}
    </Typography>
</CardContent>

<Hidden xsDown>
        <CardMedia className='cardMedia' image={props.post.image} title={props.post.imageTitle}/>
    </Hidden>
    </div>
   
</Card>
</CardActionArea>
   </Grid>
 
   
  )
}

export default PostCard
