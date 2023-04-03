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
public class ApiContriller2 {

  @Autowired
  private ListPersonne listPer;

  @GetMapping("/personnes")
  public Collection<Personne> getPersonnes() {
    System.out.println("test");
    return listPer.getPersonnes();
  }

  @PostMapping("/personnes")
  public ResponseEntity<Personne> addPersonne(@RequestBody Personne personne, UriComponentsBuilder builder) {
    listPer.addPersonne(personne);

    UriComponents linkToNewPersonne = builder.path("/api/personnes").build();

    return ResponseEntity.created(linkToNewPersonne.toUri()).build();
  }

}
