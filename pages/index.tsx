import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import SearchBar from '../src/components/SearchBar'
import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Filters } from '../src/containers/Filters'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: 'flex', // makes it flex container
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1, // padding of 1 unit
          m: 1, // margin of 1 unit
          bgColor: purple[500],
          borderRadius: 1,
          width: '70%',
          margin: 'auto',
          height: '400px'
        }}
      >
        <SearchBar />
        <Filters />
      </Box>
    </div>
  )
}

export default Home
