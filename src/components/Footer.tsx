import PhoneIcon from '../pic/phone-footer-white.png'
import EmailIcon from '../pic/email-footer-white.png'
import GithubIcon from '../pic/github-footer-white.png'
import LinkedinIcon from '../pic/linkedin-footer-white.png'
import FacebookIcon from '../pic/facebook-footer-white.png'
import InstagramIcon from '../pic/instagram-footer-white.png'

function Footer() {
    return (
        <>
            <ul className="nav justify-content-center bg-dark" style={{height: "50px"}}>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={PhoneIcon} alt="" style={{height: "25px"}}/> 
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={EmailIcon} alt="" style={{height: "25px"}}/> 
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={GithubIcon} alt="" style={{height: "26px"}}/> 
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={LinkedinIcon} alt="" style={{height: "25px"}}/> 
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={FacebookIcon} alt="" style={{height: "25px"}}/> 
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link active" href="#" style={{color: "white"}}>
                        <img src={InstagramIcon} alt="" style={{height: "25px"}}/> 
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Footer