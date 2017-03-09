package com.neppo.model;

import javax.persistence.*;

@Entity
@Table(name = "pessoasTable")

public class PessoasModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nomePessoas", nullable = false)
    private String nome;

    @Column(name = "nomeLogin", nullable = false)
    private String login;

    @Column(name = "nomeSenha", nullable = false)
    private String senha;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
