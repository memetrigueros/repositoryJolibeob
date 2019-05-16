import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'categoria',
   loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  {
     path: 'login',
   loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'busqueda-personalizada',
    loadChildren: './busqueda-personalizada/busqueda-personalizada.module#BusquedaPersonalizadaPageModule'
  },
  {
    path: 'informacion',
    loadChildren: './informacion/informacion.module#InformacionPageModule'
  },
  {
    path: 'ayuda',
    loadChildren: './ayuda/ayuda.module#AyudaPageModule'
  },
  {
    path: 'recomendados',
    loadChildren: './recomendados/recomendados.module#RecomendadosPageModule'
  },
  {
    path: 'favoritos',
     loadChildren: './favoritos/favoritos.module#FavoritosPageModule'
  },
  {
    path: 'pantalla-primera-vez',
    loadChildren: './pantalla-primera-vez/pantalla-primera-vez.module#PantallaPrimeraVezPageModule'
  },

  { path: 'bulgur', loadChildren: './bulgur/bulgur.module#BulgurPageModule' },
  { path: 'ensalada', loadChildren: './ensalada/ensalada.module#EnsaladaPageModule' },
  { path: 'peras', loadChildren: './peras/peras.module#PerasPageModule' },
  { path: 'gazpacho', loadChildren: './gazpacho/gazpacho.module#GazpachoPageModule' },
  { path: 'arroz', loadChildren: './arroz/arroz.module#ArrozPageModule' },
  { path: 'frito', loadChildren: './frito/frito.module#FritoPageModule' },
  { path: 'sopa', loadChildren: './sopa/sopa.module#SopaPageModule' },
  { path: 'berenjenas', loadChildren: './berenjenas/berenjenas.module#BerenjenasPageModule' },
  { path: 'morcilla', loadChildren: './morcilla/morcilla.module#MorcillaPageModule' },
  { path: 'brocoli', loadChildren: './brocoli/brocoli.module#BrocoliPageModule' },
  { path: 'lentejas', loadChildren: './lentejas/lentejas.module#LentejasPageModule' },
  { path: 'rollito', loadChildren: './rollito/rollito.module#RollitoPageModule' },
  { path: 'atun', loadChildren: './atun/atun.module#AtunPageModule' },
  { path: 'fideos', loadChildren: './fideos/fideos.module#FideosPageModule' },
  { path: 'arrozo', loadChildren: './arrozo/arrozo.module#ArrozoPageModule' },
  { path: 'nishime', loadChildren: './nishime/nishime.module#NishimePageModule' },
  { path: 'cerdo', loadChildren: './cerdo/cerdo.module#CerdoPageModule' },
  { path: 'gambas', loadChildren: './gambas/gambas.module#GambasPageModule' },
  { path: 'alga', loadChildren: './alga/alga.module#AlgaPageModule' },
  { path: 'cintas', loadChildren: './cintas/cintas.module#CintasPageModule' },
  { path: 'soja', loadChildren: './soja/soja.module#SojaPageModule' },
  { path: 'huevo', loadChildren: './huevo/huevo.module#HuevoPageModule' },
  { path: 'churros', loadChildren: './churros/churros.module#ChurrosPageModule' },
  { path: 'camote', loadChildren: './camote/camote.module#CamotePageModule' },
  { path: 'coco', loadChildren: './coco/coco.module#CocoPageModule' },
  { path: 'pollo', loadChildren: './pollo/pollo.module#PolloPageModule' },
  { path: 'gallina', loadChildren: './gallina/gallina.module#GallinaPageModule' },
  { path: 'milanesa', loadChildren: './milanesa/milanesa.module#MilanesaPageModule' },
  { path: 'patacones', loadChildren: './patacones/patacones.module#PataconesPageModule' },
  { path: 'yuca', loadChildren: './yuca/yuca.module#YucaPageModule' },
  { path: 'carne', loadChildren: './carne/carne.module#CarnePageModule' },
  { path: 'chile', loadChildren: './chile/chile.module#ChilePageModule' },
  { path: 'hilachas', loadChildren: './hilachas/hilachas.module#HilachasPageModule' },
  { path: 'elote', loadChildren: './elote/elote.module#ElotePageModule' },
  { path: 'frijol', loadChildren: './frijol/frijol.module#FrijolPageModule' },
  { path: 'fiambre', loadChildren: './fiambre/fiambre.module#FiambrePageModule' },
  { path: 'chilaquiles', loadChildren: './chilaquiles/chilaquiles.module#ChilaquilesPageModule' },
  { path: 'molletes', loadChildren: './molletes/molletes.module#MolletesPageModule' },
  { path: 'platano', loadChildren: './platano/platano.module#PlatanoPageModule' },
  { path: 'ponche', loadChildren: './ponche/ponche.module#PonchePageModule' },
  { path: 'picado', loadChildren: './picado/picado.module#PicadoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
