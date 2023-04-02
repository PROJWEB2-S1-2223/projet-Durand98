package be.eafcuccle.server;

import java.sql.Date;
import java.text.DateFormat;
import java.util.UUID;
import java.lang.String;

public class Agenda {

  private String periode;
  private String nomProj;

  public Agenda(String nomProj, String periode) {

    this.periode = periode;
    this.nomProj = nomProj;

  }

  public String getPeriode() {
    return periode;
  }

  public String getNomPro() {
    return nomProj;
  }

  public void setNomPro(String nomProj) {
    this.nomProj = nomProj;
  }

  public void setPeriodee(String periode) {
    this.periode = periode;
  }

}
