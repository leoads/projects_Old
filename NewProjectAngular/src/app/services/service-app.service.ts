import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAppService {

  constructor() { }
    getUsers(){
      return ["Sandra Oliveira", "Leonardo Sulino", "João Paulo", "José Carlos", "Rogerio Ceni"]
    }

    getProducts(){
      return ["Produto - 1", "Produto - 2", "Produto - 3", "Produto - 4", "Produto - 5"]
    }

    getActions(){
      return ["Ação - 1", "Ação - 2", "Ação - 3", "Ação - 4", "Ação - 5"]
    }

    getEconomicGroup(){
      return ["Visão Agregada 1", "Visão Agregada 2", "Visão Agregada 3", "Visão Agregada 4", "Visão Agregada 5"]
    }

    getListMenu(){
      return ["Painel de Gestão", "Conta Digital", "Anti. de Recebíveis",]
    }

}
