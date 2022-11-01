import zuri from './assets/Zuri.Internship_Logo.svg'
import hng from './assets/I4G.svg'

const Footer = () => {
    return ( 
        <footer className="foot-socials">
            <a href="https://hngi9.zuriboard.com/"><img src={zuri} alt="" /></a>
            <p style={{color: "#667085"}}>HNG Internship 9 Frontend Task</p>
            <a href="https://ingressive.org/"><img src={hng} alt="" /></a>
        </footer>
     );
}
 
export default Footer;