package be.eafcuccle.server;

import java.util.Collection;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/api")
public class ApiController {
  @Autowired
  private List list;

  @GetMapping("/api/projets")
  public Collection<Projet> getMesProjets() {
    return list.getMesProjets;
  }
}
