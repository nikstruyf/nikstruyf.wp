import * as React from 'react';
import TopNavBar from '../components/topNavBar';
import Nik from '../pic/Nik.jpg';
import Background1 from '../pic/background-2.jpg'

export default function About() {

    return (
        <>
            <TopNavBar />
            <div className="container-fluid " style={{ height: "85vh", padding: "0 5vh" }}>
                <div className="d-flex align-items-center flex-row row" style={{height: "100%"}}>
                    <div className="col-lg-4 offset-lg-1 d-flex flex-column justify-content-center">
                        <img src={Nik} alt="Nik" className="rounded-circle"/>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-auto">
                                <h1>Nik Kunraho Struyf</h1>
                            </div>
                        </div>
                        <div className="fst-italic" style={{color: "#50ad5e", fontSize: "20px"}}>20 years / Student</div>
                        <div className="row">
                            <div className="col-md-auto">
                                <br /><h4>Hello :^)</h4>
                                <h4>I'm Nik. Computer Engineering Student at Kasetsart Univesity, Bangkok Thailand</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ height: "auto", backgroundImage: `url(${Background1})` }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden" style={{ backgroundColor: "white", margin: "5vh", height: "auto", padding: "0 0 3vh 0" }}>
                        <h3 className="m-3">Fun Facts</h3>
                        <div className="row px-4 mb-3">
                            <div>Study</div>
                            <div className="progress p-0">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={2} aria-valuemin={0} aria-valuemax={100} style={{ width: "2%" }}>2%</div>
                            </div>
                        </div>
                        <div className="row px-4 mb-3">
                            <div>Sleep</div>
                            <div className="progress p-0">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: "100%" }}>100%</div>
                            </div>
                        </div>
                        <div className="row px-4 mb-3">
                            <div>Money</div>
                            <div className="progress p-0">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} style={{ width: "5%" }}>5%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid bg-light" style={{ height: "90vh", padding: "5vh" }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden" style={{ backgroundColor: "white", margin: "5vh", height: "40vh" }}>
                        <div className="container-md">
                            <h2 className="mt-4 ms-4 mb-4">My Skills</h2>
                            <div className="row px-4 mb-3">
                                <div>Study</div>
                                <div className="progress p-0">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: "0%"}}>0</div>
                                </div>
                            </div>
                            <div className="row px-4 mb-3">
                                <div>Sleep</div>
                                <div className="progress p-0">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: "100%"}}>100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}