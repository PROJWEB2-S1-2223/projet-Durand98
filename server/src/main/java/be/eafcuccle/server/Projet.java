package be.eafcuccle.server;

public class Projets {
  private String nameProj;
  private String nameChef;
  private String duree;

public Projet(String nameProj,String namChef,String duree){
this.nameProj=nameProj;
this.namChef=namChef;
this.dureee=duree;
}

  protected void Projet() {
  }

  public String getNameProj() {
    return nameProj;
  }

  public String getNamChef() {
    return nameChef;
  }

  public String getDuree() {
    return duree;
  }
}
