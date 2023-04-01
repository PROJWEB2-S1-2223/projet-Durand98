package be.eafcuccle.server;

import java.sql.Date;
import java.text.DateFormat;
import java.util.UUID;
import java.lang.String;

public class Personne {

  private String nomMembre;
  private String nomProj;

  public Personne(String nomProj, String nomMembre) {

    this.nomMembre = nomMembre;
    this.nomProj = nomProj;

  }

  public String getNomPersonne() {
    return nomMembre;
  }

  public String getNomPro() {
    return nomProj;
  }

  public void setNomPro(String nomProj) {
    this.nomProj = nomProj;
  }

  public void setNomPersonne(String nomMembre) {
    this.nomMembre = nomMembre;
  }

}
