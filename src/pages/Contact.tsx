import * as React from 'react';
import TopNavBar from '../components/topNavBar';
import Nik from '../pic/Nik.jpg';
import PhoneIcon from '../pic/phone-call.png';
import EmailRoundedIcon from '../pic/gmail.png';
import GithubIcon from '../pic/github-logo.png'
import FacebookIcon from '../pic/facebook-circular-logo.png'
import InstagramIcon from '../pic/instagram.png'
import TwitterIcon from '../pic/twitter.png'
import LinkedinIcon from '../pic/linkedin.png'
import { url } from 'inspector';

export default function Contact() {

    return (
        <>
            <TopNavBar />
            <div className="container-fluid display-block bg-light" style={{ height: "85vh" }}>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="" style={{ margin: "32vh 20vh", fontSize: "60px" }}>MY <br />CONTACT.</h1>
                    </div>
                    <div className="col-lg-6" style={{margin: "3vh 0"}}>
                        <div className="border border-3 rounded-3 d-flex flex-row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="d-flex justify-content-center col-4">
                                <img src={PhoneIcon} alt="Github" style={{ width: "60px", margin: "1vh" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "20px" }}>(+66) 93 3912725</div>
                        </div>
                        <div className="border border-3 rounded-3 row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="p-2 d-flex justify-content-center col-4">
                                <img src={EmailRoundedIcon} alt="Github" style={{ width: "60px" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>nikkunraho.struyf@gmail.com</div>
                        </div>
                        <div className="border border-3 rounded-3 row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="p-2 d-flex justify-content-center col-4">
                                <img src={GithubIcon} alt="Github" style={{ width: "60px" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>github.com/nikstruyf</div>
                        </div>
                        <div className="border border-3 rounded-3 row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="p-2 d-flex justify-content-center col-4">
                                <img src={LinkedinIcon} alt="Github" style={{ width: "60px" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>Nik Kunraho Struyf</div>
                        </div>
                        <div className="border border-3 rounded-3 row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="p-2 d-flex justify-content-center col-4">
                                <img src={FacebookIcon} alt="Github" style={{ width: "60px" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>Nik Struyf</div>
                        </div>
                        <div className="border border-3 rounded-3 row" style={{margin: "2vh 5vh", overflow: "hidden", backgroundColor: "white"}}>
                            <div className="p-2 d-flex justify-content-center col-4">
                                <img src={InstagramIcon} alt="Github" style={{ width: "60px" }} />
                            </div>
                            <div className="col-8 d-flex align-items-center" style={{ fontSize: "22px" }}>nik.nks</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid" style={{ backgroundColor: "#ffffff", height: "65vh" }}>
                <div className="row justify-content-md-center">
                    <div className="col-md-4" style={{ padding: "15vh 12vh 3vh 15vh" }}>

                    </div>
                    <div className="col-md-4" style={{ padding: "15vh 5vh 3vh 0" }}>
                        
                    </div>
                    <div className="col-md-4" style={{ padding: "15vh 15vh 3vh 5vh" }}>
                    
                    </div>
                </div>
            </div> */}
        </>
    )
}