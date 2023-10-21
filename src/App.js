import { GlobalCss } from './styles';
import projeto1 from './img/01.png';
import projeto2 from './img/02.png';
import projeto3 from './img/03.png';
import projeto4 from './img/04.png';
import capa from './img/capa.png';
import logo from './img/logo-.png';
import zap from './img/zap.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import git from './img/git.png';
import {Cabecalhostyle, Homestyle, Sobrestyle, Projetostyle } from './CabecalhoStyle'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalCss/>
      <Cabecalhostyle  className='Container'>
      <img src={logo} alt='logo'/> 
      <ul>
        <li>
        <Link className='link' to="/">Home</Link>
        </li>
        <li>
        <Link className='link' to="/Sobre">Sobre</Link>
        </li>
        <li>
        <Link className='link' to="/Portifolio">Portifólio</Link>
        </li>
      </ul>
    
    </Cabecalhostyle >
      <Routes>
    <Route exact path="/" element={
      <>
    <Homestyle className='Container'>
      <div className='texto'>
          <div>
            <p>Olá pessoas,</p>
            <span>EU SOU KEVYN<br/>
            PROGRAMADOR FRONT-END</span>
            <p>Seja bem-vindo ao meu portifólio website</p>
          </div>
          <div>
          <a href="https://drive.google.com/file/d/107Zq1kEUdWbHM67rK8MK5zrHVZUZnEqp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button>Download do Currículo</button>
          </a>
          </div>
          <div>
              <ul>
                <li>
                  <a href="https://github.com/kevyn606" target="_blank" rel="noopener noreferrer">
                    <img src={git} alt='github' />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kevyn-sousa-9b9345254/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin' />
                  </a>
                </li>
                <li>
                  <a href="tel:+5531984333113">
                    <img src={zap} alt='zap' />
                  </a>
                </li>
                <li>
                  <a href="mailto:kevynsousa60@hotmail.com">
                    <img src={email} alt='email' />
                  </a>
                </li>
              </ul>
        </div>
      </div>
        <div>
        <img src={capa} alt='capa' />
        </div>
    </Homestyle>
      <Sobrestyle className='Container'>
        <h3>Sobre mim</h3>
        <p>Desenvolvedor Front-end com experiência em React.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formando em analise e desenvolvimento de sistemas  e cursando Desenvolvedor full stack python EBAC .</p>
        <div className='habilidades'>
          <h3>habilidades</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>CSS-in-JS</li>
            <li>Node.js</li>
            <li>Redux</li>
            <li>SASS</li>
            <li>Figma</li>
            <li>PostgreSQL</li>
            <li>Cypress</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>Gulp</li>
          </ul>
        </div>
      </Sobrestyle>
      <Projetostyle className='Container' >
        <h3>Projetos</h3>
        <ul>
          <li>
          <a className='github' href="https://github.com/kevyn606/efoodkevyn/tree/main" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt='github' />
                </a>
          <a href="https://efoodkevyn.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={projeto1} alt='github' />
                  </a>
          </li>
          <li>
          <a className='github' href="https://github.com/kevyn606/lista-react/tree/main" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt='github' />
                </a>
          <a href="https://lista-react-kevyn.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={projeto2} alt='github' />
                  </a>
          </li>
          <li>
          <a className='github' href="https://github.com/kevyn606/clone_disneyplus/tree/main" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt='github' />
                </a>
          <a href="https://clone-disneyplus-eight-jade.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={projeto3} alt='github' />
                  </a>
          </li>
          <li>
          <a className='github' href="https://github.com/kevyn606/delex/tree/main" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt='github' />
                </a>
          <a href="https://delex-hiv6.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={projeto4} alt='github' />
                  </a>
          </li>
        </ul>
      </Projetostyle>
      </>
    }>
    </Route>
    <Route path="/Sobre" element={
      <Sobrestyle className='Container'>
      <h3>Sobre mim</h3>
      <p>Desenvolvedor Front-end com experiência em React.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formando em analise e desenvolvimento de sistemas  e cursando Desenvolvedor full stack python EBAC .</p>
      <div className='habilidades'>
        <h3>habilidades</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>CSS-in-JS</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>SASS</li>
          <li>Figma</li>
          <li>PostgreSQL</li>
          <li>Cypress</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>Gulp</li>
        </ul>
      </div>
    </Sobrestyle>
    }>

    </Route>
    <Route path="/Portifolio" element={
      <Projetostyle className='Container' >
      <h3>Projetos</h3>
      <ul>
        <li>
        <a className='github' href="https://github.com/kevyn606/efoodkevyn/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={git} alt='github' />
              </a>
        <a href="https://efoodkevyn.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={projeto1} alt='github' />
                </a>
        </li>
        <li>
        <a className='github' href="https://github.com/kevyn606/lista-react/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={git} alt='github' />
              </a>
        <a href="https://lista-react-kevyn.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={projeto2} alt='github' />
                </a>
        </li>
        <li>
        <a className='github' href="https://github.com/kevyn606/clone_disneyplus/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={git} alt='github' />
              </a>
        <a href="https://clone-disneyplus-eight-jade.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={projeto3} alt='github' />
                </a>
        </li>
        <li>
        <a className='github' href="https://github.com/kevyn606/delex/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={git} alt='github' />
              </a>
        <a href="https://delex-hiv6.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={projeto4} alt='github' />
                </a>
        </li>
      </ul>
    </Projetostyle>
    }>
    </Route>
    </Routes>
    </Router>
  );
}

export default App;
