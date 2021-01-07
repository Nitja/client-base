import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menu : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private dataService: DataService
  ) {
    translate.setDefaultLang('en');
    this.sideMenu();
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //clients v6ttakse baasis 1 kord ja kasutatakse 'ppi sees juba koopiat
    this.dataService.fetchClients();
  }
  
  sideMenu() {
    this.translate.get('home.title').subscribe(() => {
      this.menu =
      [
        {
          title : this.translate.instant("home.title"),
          url   : "/home",
          icon  : "home-outline"
        },
        {
          title : this.translate.instant("notifications.title"),
          url   : "/notifications",
          icon  : "notifications-outline"
        },
        {
          title : this.translate.instant("client.clientsTitle"),
          url   : "/clients",
          icon  : "people-outline"
        },
        {
          title : this.translate.instant("product.productsTitle"),
          url   : "/products",
          icon  : "cart-outline"
        },
        {
          title : this.translate.instant("debts.title"),
          url   : "/debts",
          icon  : "card-outline"
        },
      ]
  });
   
  }

}
