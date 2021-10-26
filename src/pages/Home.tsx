import * as React from 'react';
import {useHistory} from 'react-router-dom';
import TopNavBar from '../components/topNavBar';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import Hand from '../pic/hand.png';
import Background1 from '../pic/background-2.jpg'

export default function Home() {
    let history = useHistory();
    
    return (
        <>
            <TopNavBar />
            <div className="container-fluid">
                <div className="container-fluid d-flex flex-row row justify-content-center align-items-center" style={{height: "80vh"}}>
                    <div className="d-flex flex-column col-8 justify-content-end">
                        <div className="ms-5">
                            <h1>Nik Kunraho Struyf</h1> 
                            <div className="mb-3" style={{fontSize:"22px"}}>Computer Engineer Student, Kasetsart University, Bangkok, Thailand</div>
                            <Button variant="contained" style={{backgroundColor: "#28bf64"}} onClick={() => {history.push("/about");}} disableElevation>About Me</Button>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-4">
                        <div>
                            <img src={Hand} alt="Hand" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}