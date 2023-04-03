import React from 'react';
function List({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.nomProj}>
          <span>{item.nomProj}</span>
          <span>{item.dateDebut}</span>
          <span>{item.dateFin}</span>
          <span>{item.nomChef}</span>

          <button type="button" onClick={() => onRemove(item.nomProj)}>
            <h4>SUPPRIMER De L'agenda </h4>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default List;
