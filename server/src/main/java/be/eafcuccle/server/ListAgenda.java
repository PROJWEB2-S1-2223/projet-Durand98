package be.eafcuccle.server;

import java.util.Collection;
import java.util.ArrayList;
import org.springframework.stereotype.Component;

@Component
public class ListAgenda {
  private Collection<Agenda> agendas = new ArrayList<>();

  public ListAgenda() {
    addAgen(new Agenda("Contruction", "2023-07-04 au 2023-09-12"));

  }

  public Collection<Agenda> getAgenda() {
    return agendas;
  }

  public void addAgen(Agenda agenda) {
    agendas.add(agenda);
  }
}
