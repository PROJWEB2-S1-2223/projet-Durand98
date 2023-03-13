import React, { useState ,useEffect} from 'react';
import FichContent from './FichContent';
import ProjContent from './ProjContent';
import EquipeContent from './EquipeContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Menu(){
  const [count, setCount] = useState('');
  const [active, setActive] = useState('Projets');
  const list=["Projet","Agenda","Equipe","Fichier",];

  return(
  <ul>
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">

    {
      list.map(function Retour(item){
        return(
          <MenuItem key={item} title={item} onClick={setActive} />
         );
      })
    }
     </Nav>
     </Navbar.Collapse>
     </Container>
     </Navbar>
     {active === 'Projet' && <ProjContent/>}
     {active === 'Agenda' && <h2>Agenda</h2>}
     {active === 'Equipe' && <EquipeContent/>}
     {active === 'Fichier' && <FichContent/>}
    </>
  </ul>);

function MenuItem({ title, onClick })
{
   return (
<li>
  <button type="button" onClick={() => onClick(title)}>
    {title}
    </button>
    </li>
    );}
  }

export default Menu;
