import TopNavBar from '../components/topNavBar';
import Footer from '../components/Footer';
import Background1 from '../pic/background-2.jpg'

export default function Skills() {
    return (
        <>
            <TopNavBar />
            <div className="container-fluid" style={{ height: "auto", backgroundImage: `url(${Background1})` }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden p-4" style={{ backgroundColor: "white", margin: "7vh 5vh 7vh 5vh", height: "auto" }}>
                        <div className="container-md">
                            <h2 className="mb-4">My Skills</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ height: "auto" }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden" style={{ backgroundColor: "white", margin: "5vh", height: "40vh" }}>
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
            <Footer />
        </>
    )
}