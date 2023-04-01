package be.eafcuccle.server;

import java.util.Collection;
import java.util.ArrayList;
import org.springframework.stereotype.Component;

@Component
public class ListPersonne {
  private Collection<Personne> personnes = new ArrayList<>();

  public ListPersonne() {
    addPersonne(new Personne("jeux", "Kewou Durand"));

  }


  public Collection<Personne> getPersonnes() {
    return personnes;
  }

  public void addPersonne(Personne personne) {
    personnes.add(personne);
  }
}
