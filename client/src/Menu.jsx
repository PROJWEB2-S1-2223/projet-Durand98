import React, { useState ,useEffect} from 'react';
import Forme from './Forme';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Menu(){
  const [count, setCount] = useState('');
  const list=
  [
    {nom: "Projet",prenom: "Projet",},
    {nom: "Agenda", prenom: "Angenda",},
    {nom: "Equipe", prenom: "Equipe",},
    {nom: "Fichier", prenom: "Fichier",},
  ];
  const initialproj = JSON.parse(localStorage.getItem('proj'));
  const [proj, setProj] = useState(initialproj || [] );

  useEffect(() => {
    localStorage.setItem('proj', JSON.stringify(proj));
  },
  [proj]);

  function addProj(newProj) {
    const newProjList = [...proj, newProj];
    setProj(newProjList);
  }

  function removeProj(nomProj) {
    const newProjList = proj.filter((ddd) => ddd.nomProj !== nomProj);
    setProj(newProjList);
  }

  function myFunction(even){
    setCount(even.target.value);
  console.log(even.target.value);}

  const [form,setForm]=useState(false);
  function booleanForme(){
    setForm(!form);
  }

  return(
  <ul>
  <li><button onClick={booleanForme}><h3>CREER UN PROJET</h3></button></li>
    {form && (
      <>
    <Forme onSubmit={addProj}/>
    <List list={proj} onRemove={removeProj}/>
    </>
    )}
    <p><strong>{count} </strong></p>
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
          <span onClick={myFunction} >
        <li>
      <button  value={item.nom} variant="success" >
      {item.nom}
      </button>
      </li>
      </span>);
      })
    }
     </Nav>
     </Navbar.Collapse>
     </Container>
     </Navbar>
    </>
  </ul>);
  }

export default Menu;
