
import java.util.Collection;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class ListPro {
  private Collection<Projet> projets = new ArrayList<>();

  ListPro() {
    projets.add(new Projet("Fabrique de jeux ", "Kewou Durand ", "3 mois"));
  }

  public Collection<Projet> getProjets() {
    return projets.getProjets;
  }

}
