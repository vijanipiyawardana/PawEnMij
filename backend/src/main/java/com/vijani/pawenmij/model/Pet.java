package com.vijani.pawenmij.model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Entity
@Table(name = "pet")
public class Pet {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid-hibernate-generator")
    @GenericGenerator(name = "uuid-hibernate-generator", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "breed")
    private String breed;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Double age = 0.0;

    @Column(name = "vaccinated")
    private Boolean vaccinated = false;

    @Column(name = "chipped")
    private Boolean chipped = false;

    @Column(name = "neutered")
    private Boolean neutered = false;

    @ManyToOne(optional = false)
    @JoinColumn(name = "owner_id")
    private Owner owner;

    public Pet() {
    }

    public Pet(String type, String breed, String status, String name, Double age, Boolean vaccinated, Boolean chipped, Boolean neutered, Owner owner) {
        this.type = type;
        this.breed = breed;
        this.status = status;
        this.name = name;
        this.age = age;
        this.vaccinated = vaccinated;
        this.chipped = chipped;
        this.neutered = neutered;
        this.owner = owner;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getAge() {
        return age;
    }

    public void setAge(Double age) {
        this.age = age;
    }

    public Boolean getVaccinated() {
        return vaccinated;
    }

    public void setVaccinated(Boolean vaccinated) {
        this.vaccinated = vaccinated;
    }

    public Boolean getChipped() {
        return chipped;
    }

    public void setChipped(Boolean chipped) {
        this.chipped = chipped;
    }

    public Boolean getNeutered() {
        return neutered;
    }

    public void setNeutered(Boolean neutered) {
        this.neutered = neutered;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }
}
