import * as React from 'react';
import TopNavBar from '../components/topNavBar';
import ContactBox from '../components/ContactBox';
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
            <div className="container-fluid display-block bg-light" style={{ height: "auto" }}>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="" style={{ margin: "32vh 20vh" }}>MY <br />CONTACT</h1>
                    </div>
                    <div className="col-lg-6" style={{margin: "3vh 0"}}>
                        <ContactBox icon={PhoneIcon} contact="(+66) 93 3912725"/>
                        <ContactBox icon={EmailRoundedIcon} contact="nikkunraho.struyf@gmail.com"/>
                        <ContactBox icon={GithubIcon} contact="github.com/nikstruyf"/>
                        <ContactBox icon={LinkedinIcon} contact="Nik Kunraho Struyf"/>
                        <ContactBox icon={FacebookIcon} contact="Nik Struyf"/>
                        <ContactBox icon={InstagramIcon} contact="nik.nks"/>
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