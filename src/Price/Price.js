import * as React from 'react'
import './Price.css';
import Chip from '@mui/material/Chip';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

function Price(){
    return (
        <div className='pricePage'>
            <h3 style={{paddingTop: '50px', textAlign: 'center'}}>What do you think, will be the correct price ?</h3>
            <div className='price'> 
                <Chip icon={<CurrencyRupeeIcon />} label="100 - 200" color='secondary' sx={{fontSize: '30px', padding:'30px'}} variant="outlined" />
                <Chip icon={<CurrencyRupeeIcon />} label="200 - 400" color='secondary' sx={{fontSize: '30px', padding:'30px'}} variant="outlined" />
                <Chip icon={<CurrencyRupeeIcon />} label="500 - 700" color='secondary' sx={{fontSize: '30px', padding:'30px'}} variant="outlined" />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}><Link to="/" style={{textDecoration: 'none'}}><Chip icon={<DoneIcon />} label="Done" color='secondary' sx={{fontSize: '20px', padding:'20px', cursor: 'pointer'}} variant="outlined" /></Link></div>
        </div>
    )
}

export default Price;