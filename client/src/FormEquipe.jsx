/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import useSWR from 'swr';

import { Alert, Spinner, Stack } from 'react-bootstrap';

function FormeEquipe({ onSubmit }) {
  const fetcher = (...args) => fetch(...args).then((res1) => res1.json());
  const fetcher2 = (...args) => fetch(...args).then((res) => res.json());
  const [counts, setCounts] = useState({
    nomMembre: '',
    nomPro: '',
  });
  const [selectedProj, setSelectedProj] = useState('');
  const [selecteMem, setSelecteMen] = useState('');

  const [validated, setValidated] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  function handleNomMembreChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomMembre: newNomChef,
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

      fetch('/api/personnes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(counts),
      })
        .then(() => {
          setCounts({
            nomMembre: '',
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

  function handleMenChange(event) {
    const newNomChef = event.target.value;
    setCounts((prevCounts) => ({
      ...prevCounts,
      nomMembre: newNomChef,
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

  function MembreOption() {
    const { data, error } = useSWR('/api/personnes', fetcher2);

    if (error) {
      return <option value="">Une erreur s'est produite lors du chargement des membres</option>;
    }

    if (!data) {
      return <option value="">Chargement du membre...</option>;
    }

    return (
      <>
        <option value="">--Choisir un membre--</option>
        {data.map((men) => (
          <option key={men.id} value={men.id}>
            {men.nomPersonne}
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
      <label htmlFor="projSelect">Choisir un projet:</label>
      <select id="projSelect" value={selectedProj} onChange={handleProjChange}>
        <ProjOptions />
      </select>{' '}
      <p>
        <FormInputText value={counts.nomMembre} onChange={handleNomMembreChange}>
          NOM DU NOUVEAU MEMBRE:{''}
        </FormInputText>
      </p>
      <label htmlFor="projSelec">Choisir un membre:</label>
      <select id="projSelect" value={selecteMem} onChange={handleMenChange}>
        <MembreOption />
      </select>
      <p>
        <button type="submit" disabled={formDisabled}>
          Ajoute
        </button>
      </p>
      {validated && <div className="error">Veuillez remplir tous les champs</div>}
      {showNotif && <div className="success"> membre ajouté avec succès</div>}
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
export default FormeEquipe;
