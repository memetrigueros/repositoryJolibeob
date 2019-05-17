import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-personalizada',
  templateUrl: './busqueda-personalizada.page.html',
  styleUrls: ['./busqueda-personalizada.page.scss'],
})
export class BusquedaPersonalizadaPage implements OnInit {
  ingrediente = "";
  path = "/busqueda-personalizada";
  ingredientes:string[] = [];
  recetas = [
      {"link":"/bulgur/","img": "assets/bulgur.jpg", "ingredientes": "tomate,sal,cebolla,aceite,vinagre,perejil,mayonesa", "nombre": "Ensaladilla de bulgur"},
	    {"link":"/peras/","img": "assets/peras.jpg", "ingredientes": "peras,salsa,miel,lima,gengibre,chile,aceite", "nombre": "Ensaladilla de peras glasiadas"},
		  {"link":"/arroz/","img": "assets/arroz.jpg", "ingredientes": "arroz,aguacate,lechuga,aceituna,huevos,queso", "nombre": "Ensalada de arroz y guacamole"},
			{"link":"/brocoli/","img": "assets/brocoli.jpg", "ingredientes": "champiñones,brocoli,sal,aceite", "nombre": "Saltiado de brocoli y champiñones"},
			{"link":"/rollito/", "img": "assets/rollito.jpg","ingredientes": "arroz,zanahoria,col,judias,pimiento,cebolla", "nombre": "Rollitos de primavera vegetales"},
      {"link":"/atun/","img": "assets/atun.jpg", "ingredientes": "atun,arroz,aceite,salsa,sal,soja", "nombre": "Aperitivo de atún con arroz"},
      {"link":"/fideos/","img": "assets/fideos.jpg", "ingredientes": "", "nombre": "Wok de verduras y fideos chinos"},
      {"link":"/arrozo/","img": "assets/arrozo.jpg", "ingredientes": "arroz,gambas,cebolla,pimiento,champiñones,brocoli,pechuga,pollo,aceite,salsa,zanahoria,puerro,pimiento", "nombre": "Arroz al estilo oriental"},
      {"link":"/nishime/","img": "assets/nishime.jpg", "ingredientes": "cebolla,calabaza,zanahoria,coliflor,alga,algas,salsa,soja", "nombre": "Nishime de verduras"},
      {"link":"/cerdo/", "img": "assets/cerdo.jpg","ingredientes": "arroz,gambas,zanahoria,cebolla,jenibre,guisantes,aceite", "nombre": "Solomillo de cerdo agridulce"},
      {"link":"/gambas/","img": "assets/gambas.jpg", "ingredientes": "Arroz,shiitakes,zanahoria,zanahorias,gambas,gamba,jengibre", "nombre": "Noodles de arroz con gambas y shiitakes"},
      {"link":"/cintas/","img": "assets/cintas.jpg", "ingredientes": "gamba,gambas,calabacin,zanahoria,pimiento,ajo,naranja,apio,ceite,sesamo", "nombre": "Salteado oriental con cintas de arroz"},
      {"link":"/huevo/","img": "assets/huevo.jpeg", "ingredientes": "huevo,paltas,huevos,tocino", "nombre": "Huevocate"},
      {"link":"/churros/","img": "assets/churros.jpg", "ingredientes": "agua,aceite,leche", "nombre": "Churros"},
      {"link":"/pollo/","img": "assets/pollo.jpg", "ingredientes": "pollo,pechuga,mozarella,queso,jamon,oliva,sal,pimienta", "nombre": "Pamplona de Pollo"},
      {"link":"/milanesa/", "img": "assets/milanesa.jpeg","ingredientes": "milanesa,manteca,harina,leche,sal,pimienta,nuez,papa", "nombre": "Milanesa de Pollo Explosiva"},
      {"link":"/carne/","img": "assets/carne.jpeg", "ingredientes": "masa,carne,molida,carne molida,cebolla,aceitunas,huevos,huevosal,pimienta", "nombre": "Empanadas de Carne Fritas"},
      {"link":"/chile/","img": "assets/chile.jpg", "ingredientes": "pimiento,chile,carne,marrano,ajo,huevos,harina", "nombre": "Chiles Rellenos"},
      {"link":"/hilachas/", "img": "assets/hilachas.jpg","ingredientes": "carne,res,carne de res,tomate,salsa,papa,zanahoria,ajo,tomillo,consome", "nombre": "Hilachas"},
      {"link":"/elote/","img": "assets/elote.jpg", "ingredientes": "elote,pan,panes,huevos,huevo,margarina,naranja,", "nombre": "Tamalitos de Elote"}
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
    for(let r of this.recetas){
      let c = 0;
      for(let i of this.ingredientes){
        if(r.ingredientes.includes(i.toLowerCase())){
          c++;
        }
      }
      if(c === this.ingredientes.length || c > (this.ingredientes.length/2)){
        this.recetasEncontradas.push(r);
      }
    }
  }

}
