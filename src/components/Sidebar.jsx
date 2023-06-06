import SocialNetworks from './SocialNetworks'

import Avatar from '../img/Eu3.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Radier Falcao" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Curriculo</a>
    </aside>
  )
}

export default Sidebar