import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
     <div className="info-card">
     <AiFillPhone id="phone-icon" />
     <div>
      <h3>Telefone</h3>
      <p>(45)991213808</p>
      </div> 
     </div>
     <div className="info-card">
     <AiOutlineMail id="email-icon" />
     <div>
      <h3>Email</h3>
      <p>leonardofperes96@gmail.com</p>
      </div> 
     </div>
     <div className="info-card">
     <AiFillEnvironment id="pin-icon" />
     <div>
      <h3>Localização</h3>
      <p>Cascavel - PR</p>
      </div> 
     </div>
    </section>
  )
}

export default InformationContainer