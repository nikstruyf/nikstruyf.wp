export default function Resume() {
    return (
        <>
            <div className="container-fluid bg-light" style={{ height: "90vh", padding: "5vh" }}>
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
                
            </div>
        </>
    )
}