package be.eafcuccle.server;

import java.sql.Date;
import java.text.DateFormat;
import java.util.UUID;
import java.lang.String;

public class Agenda {

  private String periode;
  private String nomProj;
  private String tache;

  public Agenda(String nomProj, String periode, String tache) {

    this.nomProj = nomProj;
    this.periode = periode;
    this.tache = tache;

  }

  public String getPeriode() {
    return periode;
  }
  public String getTache() {
    return tache;
  }

  public String getNomPro() {
    return nomProj;
  }

  public void setNomPro(String nomProj) {
    this.nomProj = nomProj;
  }

  public void setTache(String tache) {
    this.tache = tache;
  }

  public void setPeriodee(String periode) {
    this.periode = periode;
  }

}
