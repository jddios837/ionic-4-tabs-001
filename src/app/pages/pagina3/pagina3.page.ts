import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from "@ionic/angular";

import { Store } from "store";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit, OnDestroy {

  mutante$: any;

  constructor(
    private router: ActivatedRoute, 
    private store: Store,
    private navCtrl: NavController) { 

    // this.store.select<any>('mutante').subscribe(data => {
    //   console.log('Muntante ', data);
    // })

    this.mutante$ = this.store.select<any>('mutante');  
  //   this.router.queryParams.subscribe(params => {
  //     this.mutante = params["mutante"];
  //     // this.currency = JSON.parse(params["currency"]);
  // });
  }

  ngOnInit() {
    // this.getValue= this.router.snapshot.paramMap.get("mutante")
    // console.log(this.getValue);
  }

  ngOnDestroy() {
    
  }

  irAtras() {
    // navigate one page back
    this.navCtrl.pop();
  }

  irRoot() {
    // navigate root page
    this.navCtrl.navigateRoot('/');
  }



}
