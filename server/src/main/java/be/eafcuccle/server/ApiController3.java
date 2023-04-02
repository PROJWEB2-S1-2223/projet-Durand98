package be.eafcuccle.server;

import java.util.Collection;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api")
public class ApiController3 {

  @Autowired
  private ListAgenda listAgenda;

  @GetMapping("/agendas")
  public Collection<Agenda> getAgenda() {
    System.out.println("test");
    return listAgenda.getAgenda();
  }

  @PostMapping("/agendas")
  public ResponseEntity<Agenda> addAgen(@RequestBody Agenda agenda, UriComponentsBuilder builder) {
    listAgenda.addAgen(agenda);

    UriComponents linkToNewAgenda = builder.path("/api/agendas").build();

    return ResponseEntity.created(linkToNewAgenda.toUri()).build();
  }

}
