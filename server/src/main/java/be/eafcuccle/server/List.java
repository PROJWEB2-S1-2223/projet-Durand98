
import java.util.Collection;

@Component
public class List {
  private Collection<Projet> projets = new ArrayList<>();

  List() {
    projets.add(new Projet("Fabrique de jeux ", "Kewou Durand ", "3 mois"));
  }

  public Collection<Projet> getProjets() {
    return projets;
  }

}
