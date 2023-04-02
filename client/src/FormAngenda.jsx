import React, { useState } from 'react';
import useSWR from 'swr';
import { Alert, Spinner, Stack } from 'react-bootstrap';

function FormeAngenda({ onSubmit }) {
  const fetcher = (...args) => fetch(...args).then((res1) => res1.json());
  const [counts, setCounts] = useState({
    periode: '',
    nomPro: '',
  });
  const [selectedProj, setSelectedProj] = useState('');

  const [validated, setValidated] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  function handleNomMembreChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      periode: newNomChef,
    }));
  }

  function handleProMembreChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomPro: newNomChef,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === true) {
      setFormDisabled(true);
      setShowNotif(false);
      setValidated(true);

      fetch('/api/agendas', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(counts),
      })
        .then(() => {
          setCounts({
            periode: '',
            nomPro: '',
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

  function handleProjChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomPro: newNomChef,
    }));
  }

  function handleTacheChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      tache: newNomChef,
    }));
  }

  function ProjOptions() {
    const { data, error } = useSWR('/api/projets', fetcher);

    if (error) {
      return <option value="">Une erreur s'est produite lors du chargement des projets</option>;
    }

    if (!data) {
      return <option value="">Chargement des projets...</option>;
    }

    return (
      <>
        <option value="">--Choisir un projet--</option>
        {data.map((projet) => (
          <option key={projet.nomProj} value={projet.nomProj}>
            {projet.nomProj}
          </option>
        ))}
      </>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <p>
        <FormInputText value={counts.nomPro} onChange={handleProMembreChange}>
          NOM DU PROJET:{''}
        </FormInputText>
      </p>

      <p>
        <FormInputText value={counts.tache} onChange={handleTacheChange}>
          TACHE:{''}
        </FormInputText>
      </p>
      <label htmlFor="projSelect">Choisir un projet:</label>
      <select id="projSelect" value={selectedProj} onChange={handleProjChange}>
        <ProjOptions />
      </select>{' '}
      <p>
        <FormInputText value={counts.periode} onChange={handleNomMembreChange}>
          PERIODE :{''}
        </FormInputText>
      </p>
      <p>
        <button type="submit" disabled={formDisabled}>
          Ajoute
        </button>
      </p>
      {validated && <div className="error">Veuillez remplir tous les champs</div>}
      {showNotif && <div className="success"> ajouté da succès</div>}
    </form>
  );
}

function FormInputText({ value, onChange, children }) {
  return (
    <label>
      {children} <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
export default FormeAngenda;
