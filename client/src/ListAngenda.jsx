import React from 'react';
function ListAgenda({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.nomProj}>
          <span>{item.nomProj}</span>
          <span>{item.periode}</span> <span>{item.dure}</span>
          <button type="button" onClick={() => onRemove(item.nomProj)}>
            <h4>SUPPRIMER De L'agenda </h4>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListAgenda;
