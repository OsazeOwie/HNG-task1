import slack from './assets/slack.svg'
import git from './assets/Social icon.svg'

const Social = () => {
    return ( 
        <div className="socials">
            <a href="https://slack.com/"><img src={slack} alt="" /></a>
            <a href="https://github.com/"><img src={git} alt="" /></a>
        </div>
     );
}
 
export default Social;