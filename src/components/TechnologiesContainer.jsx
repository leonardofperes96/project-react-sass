import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiBootstrap,
  DiScriptcs,
  DiReact
} from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'html', name: 'HTML5', info:"Nivel intermediario", icon: <DiHtml5 />},
  {id: 'css', name: 'CSS3,Sass', info:"Nivel intermediario", icon: <DiCss3 />},
  {id: 'js', name: 'Javascript', info:"Nivel intermediario",icon: <DiJsBadge />},
  {id: 'bootstrap', name:'Bootstrap',info:"Nivel intermediario", icon: <DiBootstrap />},
  {id: 'api', name: 'Api', info:"Nivel Iniciante", icon: <DiScriptcs />},
  {id: 'react', name: 'React', info:"Nivel intermediario", icon: <DiReact/>},
]



const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
    <div className="technologies-grid">
    {technologies.map((tech)=>(
      <div className="technology-card" id={tech.id} key={tech.id}>
        {tech.icon}
      <div className="tecnologies-info">
        <h3>{tech.name}</h3>
        <p>{tech.info}</p>
      </div>
      </div>
    ))}

    </div>
    </section>
  )
}

export default TechnologiesContainer