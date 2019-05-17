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
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/arrozo", "ingredientes": "arroz,gambas,cebolla,pimiento,champiñones,brocoli,pechuga,pollo,aceite,salsa,zanahoria,puerro,pimiento", "nombre": "Arroz al estilo oriental"},
      {"link":"/nishime", "ingredientes": "cebolla,calabaza,zanahoria,coliflor,alga,algas,salsa,soja", "nombre": "Nishime de verduras"},
      {"link":"/cerdo", "ingredientes": "arroz,gambas,zanahoria,cebolla,jenibre,guisantes,aceite", "nombre": "Solomillo de cerdo agridulce"},
      {"link":"/gambas", "ingredientes": "Arroz,shiitakes,zanahoria,zanahorias,gambas,gamba,jengibre", "nombre": "Noodles de arroz con gambas y shiitakes"},
      {"link":"/cintas", "ingredientes": "gamba,gambas,calabacin,zanahoria,pimiento,ajo,naranja,apio,ceite,sesamo", "nombre": "Salteado oriental con cintas de arroz"},
      {"link":"/huevo", "ingredientes": "huevo,paltas,huevos,tocino", "nombre": "Huevocate"},
      {"link":"/churros", "ingredientes": "agua,aceite,leche", "nombre": "Churros"},
      {"link":"/pollo", "ingredientes": "pollo,pechuga,mozarella,queso,jamon,oliva,sal,pimienta", "nombre": "Pamplona de Pollo"},
      {"link":"/milanesa", "ingredientes": "milanesa,manteca,harina,leche,sal,pimienta,nuez,papa", "nombre": "Milanesa de Pollo Explosiva"},
      {"link":"/carne", "ingredientes": "masa,carne,molida,carne molida,cebolla,aceitunas,huevos,huevosal,pimienta", "nombre": "Empanadas de Carne Fritas"},
      {"link":"/chila", "ingredientes": "pimiento,chile,carne,marrano,ajo,huevos,harina", "nombre": "Chiles Rellenos"},
      {"link":"/hilachas", "ingredientes": "carne,res,carne de res,tomate,salsa,papa,zanahoria,ajo,tomillo,consome", "nombre": "Hilachas"},
      {"link":"/elote", "ingredientes": "elote,pan,panes,huevos,huevo,margarina,naranja,", "nombre": "Tamalitos de Elote"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/fideos", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},


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
    this.recetasEncontradas =[];
    for(let i of this.ingredientes){
      for(let r of this.recetas){
        if(r.ingredientes.includes(i.toLowerCase())){
          this.recetasEncontradas.push(r);
        }
      }
    }
  }

}
