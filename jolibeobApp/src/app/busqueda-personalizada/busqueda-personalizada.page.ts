import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-personalizada',
  templateUrl: './busqueda-personalizada.page.html',
  styleUrls: ['./busqueda-personalizada.page.scss'],
})
export class BusquedaPersonalizadaPage implements OnInit {
  ingrediente = "";
  ingredientes:string[] = [];
  recetas = [
      {"link":"/bulgur", "ingredientes": "tomate,sal,cebolla,aceite,vinagre,perejil,mayonesa", "nombre": "Ensaladilla de bulgur"},
	    {"link":"/pera", "ingredientes": "peras,salsa,miel,lima,gengibre,chile,aceite", "nombre": "Ensaladilla de peras glasiadas"},
		  {"link":"/arroz", "ingredientes": "arroz,aguacate,lechuga,aceituna,huevos,queso", "nombre": "Ensalada de arroz y guacamole"},
			{"link":"/brocoli", "ingredientes": "champiñones,brocoli,sal,aceite", "nombre": "Saltiado de brocoli y champiñones"},
			{"link":"/rollitos", "ingredientes": "arroz,zanahoria,col,judias,pimiento,cebolla", "nombre": "Rollitos de primavera vegetales"},
      {"link":"/atun", "ingredientes": "atun,arroz,aceite,salsa,sal,soja", "nombre": "Aperitivo de atún con arroz"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/arrozo", "ingredientes": "arroz,gambas,cebolla,pimiento,champiñones,brocoli,pechuga,pollo,aceite,salsa,zanahoria,puerro,pimiento", "nombre": "Arroz al estilo oriental"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "fideos,pimiento,calabacín,coliflor,zanahoria,puerro,sal", "nombre": "Wok de verduras y fideos chinos"},


  ];

  recetasEncontradas = [];
  constructor() {
    console.log(this.recetas);
   }

  ngOnInit() {
  }

  enter(){
    this.ingredientes.push(this.ingrediente);
    this.ingrediente = "";

  }

  eliminar(name){
    for(let i = 0; i< this.ingredientes.length; i++){
      let s = this.ingredientes[i];
      console.log(s, name)
      if(name === s ){
        this.ingredientes.splice(i,1);
      }
    }
  }

  buscar(){

  }

}
