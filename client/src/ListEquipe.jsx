import React from 'react';
function ListEquipe({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.idProj}>
          <span>{item.idProj}</span>
          <span>{item.numEqu}</span>
          <span>{item.nomMembre}</span>

          <button type="button" onClick={() => onRemove(item.idProj)}>
            <h4>SUPPRIMER Equipe</h4>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListEquipe;
