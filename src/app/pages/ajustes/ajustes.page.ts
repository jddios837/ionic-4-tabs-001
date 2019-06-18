import { Component, OnInit } from '@angular/core';
import { IonTabs } from "@ionic/angular";

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private tabs: IonTabs) { }

  ngOnInit() {
  }

  irAtras() {
    // Select a tab on the controller
    this.tabs.select('principal');
  }

}
