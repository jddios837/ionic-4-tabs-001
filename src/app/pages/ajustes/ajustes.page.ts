import { Component, OnInit } from '@angular/core';
import { IonTabs, ModalController } from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core';

import { ModalPage } from "../modal/modal.page";


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(
    private tabs: IonTabs,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  irAtras() {
    // Select a tab on the controller
    this.tabs.select('principal');
  }

  async mostrar_modal() {
    const modal: HTMLIonModalElement =
       await this.modalCtrl.create({
          component: ModalPage,
          componentProps: {
            paramID: 123,
            paramTitle: "Test Title"
          }
    });
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         console.log('The result:', detail.data);
       }
    });
    
    await modal.present();
  }

}
