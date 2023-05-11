import './App.css';
import {  Container, Grid } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturedCard from './components/FeaturedCard';
import { featuredPosts } from './data/Data';
import { sidebar } from './data/Data';
import PostCard from './components/PostCard';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
<>


  <ThemeProvider theme={darkTheme}>
  <Container>
    <Header/>
    <FeaturedCard/>
    <Grid container spacing={2}>


      {
  featuredPosts.map((post) => (
    <PostCard post={post} key={post.title}  image={post.image}/>
  ))
}

    </Grid>

    <Grid container spacing={5}>
<Main title="Dragon are weak"/>
<Sidebar 
title={sidebar.title}
description={sidebar.description}
archives={sidebar.archives}
/>

    </Grid>
  </Container>
    </ThemeProvider>

</>
  );
}

export default App;
