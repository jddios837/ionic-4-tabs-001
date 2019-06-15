import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule' },
  { path: 'pagina2', loadChildren: './pages/pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './pages/pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
  { path: 'ajustes2', loadChildren: './pages/ajustes2/ajustes2.module#Ajustes2PageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
