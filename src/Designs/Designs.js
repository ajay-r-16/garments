import * as React from 'react';
import './Designs.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function Designs(props){
    const { path, value, index, imgId } = props;

    let images = []

    imgId.forEach((id) => {
        images.push(<div><img src={require('../resources'+ path + path + id + '.jpeg')} style={{height: '200px', width: '200px', marginRight: '45px', marginBottom: '-50px'}} alt="Design"/></div>)
     }) 

    const nextPage = ()=> {
        console.log("next page")
    }

    return(
        <>
            <div 
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tab-${index}`}
                style={{padding: '20px'}}
            >
                { 
                    value === index && imgId.length !== 0 && (
                        <div>
                            <h3 style={{marginTop: '40px', textAlign: 'center', marginBottom: '-40px'}}>Please Select any 3 designs</h3>
                            <div className='designs'>
                                {
                                images
                                }
                            </div>
                            <div style={{display: 'flex', justifyContent: 'end', marginRight: '40px'}}><Link to="/price"><NavigateNextIcon color='secondary' sx={{ fontSize: 70, backgroundColor: 'rgb(228, 228, 228)', borderRadius: '50%' }} onClick={nextPage} /></Link></div>
                        </div>
                    )
                }
                {
                    value === index && imgId.length === 0 && (
                        <div className='designs'><h3>No new designs</h3></div>
                    )
                }
            </div>
        </>
    );
}

export default Designs;