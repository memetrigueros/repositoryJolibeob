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

  { path: 'bulgur/:pre', loadChildren: './bulgur/bulgur.module#BulgurPageModule' },
  { path: 'ensalada/:pre', loadChildren: './ensalada/ensalada.module#EnsaladaPageModule' },
  { path: 'peras/:pre', loadChildren: './peras/peras.module#PerasPageModule' },
  { path: 'gazpacho/:pre', loadChildren: './gazpacho/gazpacho.module#GazpachoPageModule' },
  { path: 'arroz/:pre', loadChildren: './arroz/arroz.module#ArrozPageModule' },
  { path: 'frito/:pre', loadChildren: './frito/frito.module#FritoPageModule' },
  { path: 'sopa/:pre', loadChildren: './sopa/sopa.module#SopaPageModule' },
  { path: 'berenjenas/:pre', loadChildren: './berenjenas/berenjenas.module#BerenjenasPageModule' },
  { path: 'morcilla/:pre', loadChildren: './morcilla/morcilla.module#MorcillaPageModule' },
  { path: 'brocoli/:pre', loadChildren: './brocoli/brocoli.module#BrocoliPageModule' },
  { path: 'lentejas/:pre', loadChildren: './lentejas/lentejas.module#LentejasPageModule' },
  { path: 'rollito/:pre', loadChildren: './rollito/rollito.module#RollitoPageModule' },
  { path: 'atun/:pre', loadChildren: './atun/atun.module#AtunPageModule' },
  { path: 'fideos/:pre', loadChildren: './fideos/fideos.module#FideosPageModule' },
  { path: 'arrozo/:pre', loadChildren: './arrozo/arrozo.module#ArrozoPageModule' },
  { path: 'nishime/:pre', loadChildren: './nishime/nishime.module#NishimePageModule' },
  { path: 'cerdo/:pre', loadChildren: './cerdo/cerdo.module#CerdoPageModule' },
  { path: 'gambas/:pre', loadChildren: './gambas/gambas.module#GambasPageModule' },
  { path: 'alga/:pre', loadChildren: './alga/alga.module#AlgaPageModule' },
  { path: 'cintas/:pre', loadChildren: './cintas/cintas.module#CintasPageModule' },
  { path: 'soja/:pre', loadChildren: './soja/soja.module#SojaPageModule' },
  { path: 'huevo/:pre', loadChildren: './huevo/huevo.module#HuevoPageModule' },
  { path: 'churros/:pre', loadChildren: './churros/churros.module#ChurrosPageModule' },
  { path: 'camote/:pre', loadChildren: './camote/camote.module#CamotePageModule' },
  { path: 'coco/:pre', loadChildren: './coco/coco.module#CocoPageModule' },
  { path: 'pollo/:pre', loadChildren: './pollo/pollo.module#PolloPageModule' },
  { path: 'gallina/:pre', loadChildren: './gallina/gallina.module#GallinaPageModule' },
  { path: 'milanesa/:pre', loadChildren: './milanesa/milanesa.module#MilanesaPageModule' },
  { path: 'patacones/:pre', loadChildren: './patacones/patacones.module#PataconesPageModule' },
  { path: 'yuca/:pre', loadChildren: './yuca/yuca.module#YucaPageModule' },
  { path: 'carne/:pre', loadChildren: './carne/carne.module#CarnePageModule' },
  { path: 'chile/:pre', loadChildren: './chile/chile.module#ChilePageModule' },
  { path: 'hilachas/:pre', loadChildren: './hilachas/hilachas.module#HilachasPageModule' },
  { path: 'elote/:pre', loadChildren: './elote/elote.module#ElotePageModule' },
  { path: 'frijol/:pre', loadChildren: './frijol/frijol.module#FrijolPageModule' },
  { path: 'fiambre/:pre', loadChildren: './fiambre/fiambre.module#FiambrePageModule' },
  { path: 'chilaquiles/:pre', loadChildren: './chilaquiles/chilaquiles.module#ChilaquilesPageModule' },
  { path: 'molletes/:pre', loadChildren: './molletes/molletes.module#MolletesPageModule' },
  { path: 'platano/:pre', loadChildren: './platano/platano.module#PlatanoPageModule' },
  { path: 'ponche/:pre', loadChildren: './ponche/ponche.module#PonchePageModule' },
  { path: 'picado/:pre', loadChildren: './picado/picado.module#PicadoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
