import {
DiHtml5,
DiCss3,
DiJsBadge,
DiNodejsSmall,
DiReact
} from 'react-icons/di'

import '../styles/components/techcontainer.sass'

const Technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "node", name: "Node Js", icon: <DiNodejsSmall />},
    {id: "react", name: "React", icon: <DiReact />},
]
const TechContainer = () => {
  return <section className='tech-container'>
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
        {Technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
                <h3>{tech.name}</h3>
            </div>
            </div>
        ))}
    </div>
  </section>
}

export default TechContainer