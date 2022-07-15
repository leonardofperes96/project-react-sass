import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  {name: 'linkedin', linkTo:'https://www.linkedin.com/in/leonardo-fernandes-peres-b98a16240/' , icon: <FaLinkedinIn />},
  {name: 'github', linkTo:'https://github.com/leonardofperes96', icon: <FaGithub />},
  {name: 'instagram', linkTo:'https://www.instagram.com/leeofperes/', icon: <FaInstagram />},
]
const SocialNetworks = () => {
  return (
    <section id="social-networks">
{socialNetworks.map((network)=>(
  <a href={network.linkTo} className="social-btn" id={network.name} key={network.name}>{network.icon}</a>
))}

    </section>
  )
}

export default SocialNetworks