package be.eafcuccle.server;

import java.util.UUID;

public class Projet {
  private UUID id;
  private String nameProj;
  private String nameChef;
  private String duree;

  public Projet(String nameProj, String nameChef, String duree) {
    this.nameProj = nameProj;
    this.nameChef = nameChef;
    this.duree = duree;
  }

  public String getNameProj() {
    return nameProj;
  }

  public String getNameChef() {
    return nameChef;
  }

  public String getDuree() {
    return duree;
  }

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }
}
