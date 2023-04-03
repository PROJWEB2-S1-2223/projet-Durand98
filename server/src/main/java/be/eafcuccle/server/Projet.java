package be.eafcuccle.server;

import java.sql.Date;
import java.text.DateFormat;
import java.util.UUID;
import java.lang.String;

public class Projet {
  private UUID id;
  private String nomProj;
  private String nomChef;
  private String dateDebut;
  private String dateFin;


  public Projet(String nomProj, String dateDebut, String dateFin, String nomChef) {
    this.nomProj = nomProj;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.nomChef = nomChef;

  }

  public String getNomProj() {
    return nomProj;
  }

  public String getNomChef() {
    return nomChef;
  }



  public String getDateFin() {
    return dateFin;
  }

  public String getDateDebut() {
    return dateDebut;
  }

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public void setNomProj(String nomProj) {
    this.nomProj = nomProj;
  }

  public void setNomChef(String nomChef) {
    this.nomChef = nomChef;
  }

  public void setDateDebut(String dateDebut) {
    this.dateDebut = dateDebut;
  }

  public void setDateFin(String dateFin) {
    this.dateFin = dateFin;
  }

}
