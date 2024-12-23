import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import SearchBar from '../src/components/SearchBar'
import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Filters } from '../src/containers/Filters'
import { DataTable } from '../src/components/DataTable';
import { transactions } from "../src/data/mock_transactions";

const Home: NextPage = () => {

  const COLUMNS = [
    "Transaction Name",
    "Amount",
    "Category",
    "Vendor"
  ]
  let categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  let names = Array.from(new Set(transactions.map(transaction => transaction.transaction_name)));
  let vendorNames = Array.from(new Set(transactions.map(transaction => transaction.transaction_vendor)));
  let amountRange = [0, 1000];
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
          backgroundColor: purple[500],
          borderRadius: 1,
          width: '70%',
          margin: 'auto',
          height: '400px'
        }}
      >
        <h1 className={styles.searchHeader}>Search Transactions</h1>
        <SearchBar />
        <Filters
          categories={categories}
          names={names}
          amountRange={amountRange}
          vendorNames={vendorNames}
        />
      </Box>
      <DataTable
      columns = {COLUMNS}
      data={transactions}
      />
    </div>
  )
}

export default Home
