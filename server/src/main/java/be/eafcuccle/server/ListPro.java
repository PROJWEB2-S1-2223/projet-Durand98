package be.eafcuccle.server;

import java.util.Collection;
import java.util.UUID;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class ListPro {
  private Collection<Projet> projets = new ArrayList<>();

  ListPro() {
    addProjet(new Projet("Projet de recherche ", "2007-07-04", "2023-09-09", "Kewou Durand "));
    addProjet(new Projet("Projet de développement de logiciel", "2012-07-04", "2023-08-03", "Franck Marius"));
    addProjet(new Projet("Projet de marketing", "2022-07-03", "2024-02-06", "Yann Hemmryc"));
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
