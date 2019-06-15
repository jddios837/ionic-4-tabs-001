import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

import { Store } from "store";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  mutantes: any[] = [
    { nombre: "Magneto", poder: "Controlar Metales" },
    { nombre: "Wolwerine", poder: "Regeneración Acelerada" },
    { nombre: "Profesor X", poder: "Poderes Psiquicos" }
  ]

  constructor(
    private router: Router, 
    public navCtrl: NavController,
    private store: Store) {  }

  ngOnInit() {
  }

  irPagina3(mutante: any) {
    this.store.set('mutante', mutante);
    this.navCtrl.navigateForward(['pagina3']);
    // this.router.navigate(['/pagina3', {mutante}])
  }

}
