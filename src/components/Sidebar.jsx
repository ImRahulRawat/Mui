import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

const Sidebar = (props) => {
  return (
   <Grid item xs={12} md={4} spacing={2} style={{padding:"10px;"}}>
<Paper elevation={0} style={{padding:"10px;"}}>
    <Typography variant='h6' >
        {props.title}
    </Typography>
    <Typography variant='h6' >
        {props.description}
    </Typography>
</Paper>
    <Typography variant='h6' >
       Archives
    </Typography>
    {
        props.archives.map((archives)=>(
            <Link
                display="block"
                variant='body1'
                href={archives.title}
                key={archives.title}
            >
              {archives.title} 
            </Link>
        ))
    }
   </Grid>
  )
}

export default Sidebar
