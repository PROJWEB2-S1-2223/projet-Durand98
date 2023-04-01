/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

function Forme({ onSubmit }) {
  const [counts, setCounts] = useState({
    nomProj: '',
    dateDebut: '',
    dateFin: '',
    nomChef: '',
  });

  const [validated, setValidated] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  function handleNomProjChange(event) {
    const newNomProj = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomProj: newNomProj,
    }));
  }

  function handleDateDebutChange(event) {
    const newDateDebut = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      dateDebut: newDateDebut,
    }));
  }

  function handleDateFinChange(event) {
    const newDateFin = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      dateFin: newDateFin,
    }));
  }

  function handleNomChefChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomChef: newNomChef,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === true) {
      setFormDisabled(true);
      setShowNotif(false);
      setValidated(true);

      fetch('/api/projets', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(counts),
      })
        .then(() => {
          setCounts({
            nomProj: '',
            dateDebut: '',
            dateFin: '',
            nomChef: '',
          });
          setFormDisabled(false);
          setShowNotif(true);
          setValidated(false);
          console.log('reussi');
        })
        .catch((err) => console.error(err));
    } else {
      setValidated(true);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <p>
        <FormInputText value={counts.nomProj} onChange={handleNomProjChange}>
          NOM DU PROJET:{''}
        </FormInputText>
      </p>
      <p>
        <FormInput value={counts.dateDebut} onChange={handleDateDebutChange} type="date">
          DATE DE DEBUT PROJ :{''}
        </FormInput>
      </p>
      <p>
        <FormInput value={counts.dateFin} onChange={handleDateFinChange} type="date">
          DATE DE FIN PROJ :{''}
        </FormInput>
      </p>
      <p>
        <FormInputText value={counts.nomChef} onChange={handleNomChefChange}>
          NOM DU CHEF DE PROJET:{''}
        </FormInputText>
      </p>

      <p>
        <button type="submit" disabled={formDisabled}>
          Ajouter Projet
        </button>
      </p>
      {validated && <div className="error">Veuillez remplir tous les champs</div>}
      {showNotif && <div className="success">Projet ajouté avec succès</div>}
    </form>
  );
}
function FormInput({ value, onChange, children }) {
  return (
    <label>
      {children} <input type="date" value={value} onChange={onChange} />
    </label>
  );
}

function FormInputText({ value, onChange, children }) {
  return (
    <label>
      {children} <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
export default Forme;
