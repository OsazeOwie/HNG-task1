
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cam from './assets/camera-01.svg';
import share from './assets/desShare.svg';
import shareHover from './assets/hoverShare.svg';
import mobile from './assets/mobileShare.svg';
import slack from './assets/slack.svg';
import git from './assets/Social icon.svg';


const Content = () => {
    const [shareBtn, setShare] = useState(share);

    const handleHover = () => {
        setShare(shareHover);
    };

    const handleHoverOut = () => {
        setShare(share);
    }
   
    return ( 
        <div>
            <main className="content">
                <div className='profile-con'>
                    <div className="profile">
                        <div className="pro-img" id='profile__img'>
                            <img src={cam} alt="" className='cam' />
                        </div>
                       <img src={shareBtn} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}  alt="" className='share'/>
                       <img src={mobile} alt="" className='mobile-share' />
                    </div>
                    <p id='twitter'>OZ</p>
                    <p id='slack' style={{ display:'none' }}>Osaze Owie</p>
                </div>
            
                <div className="link-section">
                    <a href="https://twitter.com/@OZ_SkyDaddy"  className="link-style">Twitter Link</a>
                    <a href="https://training.zuri.team/"  className="link-style"  id='btn__zuri'>Zuri Team</a>
                    <a href=" http://books.zuri.team" title='Get design and coding books here' className="link-style"  id='books'>Zuri Books</a>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=Osaze Owie" title='Buy my python books here' className="link-style"  id='book__python'>Python Books</a>
                    <a href="https://background.zuri.team" title='Get thorough background checks of coders here' className="link-style" id='pitch'>Background Check for Coders</a>
                    <a href="https://books.zuri.team/design-rules" title='Get design books for free' className="link-style" id='book__design'>Design Books</a>
                    <Link to="/contact" className="link-style" id='contact'>Contact Me</Link>
                </div>
            </main>

            <div className="social-section">
                 <div className="socials">
                    <a href="https://slack.com/"><img src={slack} alt="" /></a>
                    <a href="https://github.com/"><img src={git} alt="" /></a>
                 </div>
            </div>
        </div>
        
     );
}
 
export default Content;