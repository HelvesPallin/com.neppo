package com.neppo.controller;

import com.neppo.model.PessoasModel;
import com.neppo.model.ResultadoModel;
import com.neppo.repository.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/pessoas")
public class PessoasController {

    @Autowired
    ResultadoModel resultadoModel;

    @Autowired
    PessoasRepository pessoasRepository;

    @RequestMapping(value = "/cadastrar.html", method = RequestMethod.GET)
    public ModelAndView cadastrar(){

        return new ModelAndView("cadastrar");
    }

    @RequestMapping(value = "/consultarPessoas.html", method = RequestMethod.GET)
    public ModelAndView consultarPessoas(){

        return new ModelAndView("consultarPessoas");
    }

    @RequestMapping(value = "/editarPessoas.html/{id}", method = RequestMethod.GET)
    public ModelAndView editarPessoas(@PathVariable int id){

        return new ModelAndView("editarPessoas","pessoasModel", pessoasRepository.consultarPorId(id));
    }

    @RequestMapping(value = "/excluirPessoas/{id}", method = RequestMethod.DELETE)
    public @ResponseBody void excluirPessoa(@PathVariable int id){

        pessoasRepository.excluir(id);
    }

    @RequestMapping(value = "/salvarPessoas", method = RequestMethod.POST)
    public @ResponseBody ResultadoModel salvarPessoas(@RequestBody PessoasModel pessoasModel){

        try{
            pessoasRepository.salvar(pessoasModel);

            resultadoModel.setCodigo(1);
            resultadoModel.setMensagem("Pessoa cadastrada com sucesso.");

        }
        catch (Exception e){
            resultadoModel.setCodigo(0);
            resultadoModel.setMensagem("Erro ao inserir a pessoa: "+e.getMessage());
        }

        return resultadoModel;
    }

    @RequestMapping(value = "/editarPessoas", method = RequestMethod.POST)
    public @ResponseBody ResultadoModel editarPessoas(@RequestBody PessoasModel pessoasModel){

        try{
            pessoasRepository.alterar(pessoasModel);

            resultadoModel.setCodigo(1);
            resultadoModel.setMensagem("Pessoa editada com sucesso.");

        }
        catch (Exception e){
            resultadoModel.setCodigo(0);
            resultadoModel.setMensagem("Erro ao editar a pessoa: "+e.getMessage());
        }

        return resultadoModel;
    }

    @RequestMapping(value = "/consultarTodos", method = RequestMethod.GET)
    public @ResponseBody List<PessoasModel> consultarTodos(){

        return pessoasRepository.consultarTodos();
    }

}
