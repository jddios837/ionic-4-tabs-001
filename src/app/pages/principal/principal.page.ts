import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  onClickPage2() {
    // this.navCtrl.navigateRoot('/pagina2');
    this.router.navigate(['/pagina2']);
  }

}
