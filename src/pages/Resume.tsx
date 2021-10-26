import TopNavBar from '../components/topNavBar';
import {useHistory} from 'react-router-dom';
import Background1 from '../pic/background-2.jpg'
import Button from '@mui/material/Button';

export default function Resume() {
    let history = useHistory();

    return (
        <>
            <TopNavBar />
            <div className="container-fluid" style={{ height: "auto" }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden p-4" style={{ backgroundColor: "white", margin: "7vh 5vh 2vh 5vh", height: "auto" }}>
                        <div className="container-md">
                            <h2 className="mb-4">Education</h2>
                            <div className="row">
                                <h5>Kasetsart University, Bangkok, Thailand</h5>
                                <div className="fst-italic" style={{color: "#50ad5e", fontSize: "17px"}}>2019 - Present</div>
                                <div>Bachelor of Engineering Program in Computer Engineering</div>
                                <div>GPAX 3.08/4.00 ( from academic year 2019 - 2020 )</div>
                                <div>Relevant Coursework: Software Engineering, Computer System Laboratory, Database systems, and Data Structures and Algorithms.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ height: "auto" }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden" style={{ backgroundColor: "white", margin: "2vh 5vh", height: "auto" }}>  
                        <h2 className="my-4 ms-4 d-flex flex-row">My Skills <Button variant="contained" className="ms-4" style={{backgroundColor: "#28bf64"}} onClick={() => {history.push("/skills");}} disableElevation>More {'>'}</Button></h2>
                        <div className="row px-4 mb-3">
                            <div>Web Technologies: C, C++, PYTHON, HTML, CSS, JavaScript, TypeScript, ReactJS</div>
                            <div>Web Design: Figma</div>
                            <div>Project Management: Miro</div>
                            <div>Hardware: Board Ardunio, ESP32 Lolin </div>
                        </div>
                    </div>
                </div>       
            </div>
            <div className="container-fluid" style={{ height: "auto" }}>
                <div className="d-flex justify-content-center">
                    <div className="container-lg rounded-3 overflow-hidden" style={{ backgroundColor: "white", margin: "2vh 5vh", height: "auto" }}>                        
                    <h2 className="my-4 ms-4 d-flex flex-row">My Projects <Button variant="contained" className="ms-4" style={{backgroundColor: "#28bf64"}} onClick={() => {history.push("#");}} disableElevation>More {'>'}</Button></h2>
                        <div className="row px-4 mb-3">
                            <h5>Katrade</h5>
                        </div>
                    </div>
                </div>       
            </div>
        </>
    )
}