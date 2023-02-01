import React from 'react';
function List({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.nomProj}>
          <span>{item.dureeProj}</span> <span>{item.nomChef}</span>
          <button type="button" onClick={() => onRemove(item.nomProj)}>
            Supprimer Projet
          </button>
        </li>
      ))}
    </ul>
  );
}
export default List;
