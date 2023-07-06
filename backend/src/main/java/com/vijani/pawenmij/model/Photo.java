package com.vijani.pawenmij.model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Entity
@Table(name = "photo")
public class Photo {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid-hibernate-generator")
    @GenericGenerator(name = "uuid-hibernate-generator", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(name = "fileName")
    private String fileName;

    @Column(name = "isMain")
    private Boolean isMain = false;

    @ManyToOne(optional = false)
    @JoinColumn(name = "pet_id")
    private Pet pet;

    public Photo(String fileName, Boolean isMain, Pet pet) {
        this.fileName = fileName;
        this.isMain = isMain;
        this.pet = pet;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Boolean getMain() {
        return isMain;
    }

    public void setMain(Boolean main) {
        isMain = main;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}
