package be.eafcuccle.server;

import java.util.Collection;
import java.util.UUID;
import java.lang.Thread;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class ApiController {
  @Autowired
  private ListPro listPro;

  @GetMapping("/projets")
  public Collection<Projet> getProjets() {
    System.out.println("test");
    return listPro.getProjets();
  }

  @GetMapping("/projets/{id}")

  public ResponseEntity<Projet> finProjetById(@PathVariable UUID id) {
    Projet projet = listPro.finProjetById(id);
    if (projet != null) {
      return ResponseEntity.ok(projet);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping("/projets")
  public ResponseEntity addProjet(@RequestBody Projet projet, UriComponentsBuilder builder) {
    listPro.addProjet(projet);
    UriComponents linkToNewProjet = builder.path("/api/projets/{id}").buildAndExpand(projet.getId());
  
    return ResponseEntity.created(linkToNewProjet.toUri()).build();
  }

}
