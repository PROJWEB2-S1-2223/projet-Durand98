package be.eafcuccle.server;

import java.util.Collection;
import java.util.UUID;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class ListPro {
  private Collection<Projet> projets = new ArrayList<>();

  ListPro() {
    addProjet(new Projet("Fabrique de jeux ", "Kewou Durand ", "3 mois"));
  }

  public Collection<Projet> getProjets() {
    return projets;
  }

  public void addProjet(Projet projet) {
    projet.setId(UUID.randomUUID());
    projets.add(projet);
  }

  public Projet finProjetById(UUID id) {
    for (Projet projet : projets) {
      if (projet.getId().equals(id)) {
        return projet;
      }
    }
    return null;
  }

}
