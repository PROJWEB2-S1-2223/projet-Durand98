import React from 'react';
function ListFich({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.intitul}>
          <span>{item.intitul}</span>
          <span>{item.idProj}</span>
          <span>{item.nomMembre}</span>

          <button type="button" onClick={() => onRemove(item.intitul)}>
          <h4>SUPPRIMER  FICHIER</h4>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListFich;
