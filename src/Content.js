
import cam from './assets/camera-01.svg'
import share from './assets/desShare.svg'
import mobile from './assets/mobileShare.svg'


const Content = () => {

   
    return ( 
        <main className="content">
            <div className='profile-con'>
                <div className="profile">
                    <div className="pro-img" id='profile__img'>
                        <img src={cam} alt="" className='cam' />
                    </div>
                   <img src={share}  alt="" className='share'/>
                   <img src={mobile} alt="" className='mobile-share' />
                </div>
                <p id='twitter'>OZ</p>
                <p style={{ display:'none' }}>Osaze Owie</p>
            </div>
          
            <div className="link-section">
                <a href="https://twitter.com/@OZ_SkyDaddy" className="link-style">Twitter Link</a>
                <a href="https://training.zuri.team/" className="link-style"  id='btn__zuri'>Zuri Team</a>
                <a href=" http://books.zuri.team" className="link-style"  id='books'>Zuri Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=Osaze Owie" className="link-style"  id='book__python'>Python Books</a>
                <a href="https://background.zuri.team" className="link-style" id='pitch'>Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" className="link-style" id='book__design'>Design Books</a>
            </div>
        </main>
     );
}
 
export default Content;