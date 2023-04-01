import React from 'react';
function ListEquipe({ list, onRemove }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.nomMembre}>
          <span>{item.nomMembre}</span>

          <button type="button" onClick={() => onRemove(item.nomMembre)}>
            <h4>SUPPRIMER Equipe</h4>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListEquipe;
