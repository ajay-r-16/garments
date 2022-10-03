import './Apparels.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Designs from '../Designs/Designs';

function Apparels() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`
        };
    }

    return (
        <div style={{minHeight: '90vh', maxHeight: '90vh',overflowY: 'hidden'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', zIndex: 2, position: 'fixed', width: '100%' }}>
                <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth" sx={{bgcolor: '#fff'}}>
                    <Tab label="Saree" {...a11yProps(0)} />
                    <Tab label="Kurta & Suits" {...a11yProps(1)} />
                    <Tab label="Night wear" {...a11yProps(2)} />
                    <Tab label="Shirt" {...a11yProps(3)} />
                    <Tab label="T-Shirt" {...a11yProps(4)} />
                    <Tab label="Trousers" {...a11yProps(5)} />
                    
                </Tabs>
            </Box>
            <Designs path="/Saree" value={value} index={0} imgId = {[]}/>
            <Designs path="/kurta" value={value} index={1} imgId = {[1, 2, 3, 4, 5, 6, 7, 8]}/>
            <Designs path="/nighty" value={value} index={2} imgId = {[]}/>
            <Designs path="/shirt" value={value} index={3} imgId = {[]}/>
            <Designs path="/tshirt" value={value} index={4} imgId = {[1, 2, 3, 4, 5, 6, 7, 8]}/>
            <Designs path="/trousers" value={value} index={5} imgId = {[]}/>
            
        </div>
    );
}

export default Apparels;
