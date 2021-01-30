import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateService } from "@ngx-translate/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  menu: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //we take clients/language from storage 1 time and make a copy each time it's needed
    this.dataService.fetchClients();
    this.dataService.fetchLanguage().then((val) => {
      let language = val || "en";
      this.dataService.setLanguage(language, false);
      this.translate.setDefaultLang(language);
      this.sideMenu();
    });
  }

  //makes menu for all app
  sideMenu() {
    //only after the language is gotten from storage
    this.dataService.languageChanged.subscribe(() => {
      //only after the translation is gotten
      this.translate.get("home.title").subscribe(() => {
        this.menu = [
          {
            title: this.translate.instant("home.title"),
            url: "/home",
            icon: "home-outline",
          },
          {
            title: this.translate.instant("notifications.title"),
            url: "/notifications",
            icon: "notifications-outline",
          },
          {
            title: this.translate.instant("client.clientsTitle"),
            url: "/clients",
            icon: "people-outline",
          },
          {
            title: this.translate.instant("product.productsTitle"),
            url: "/products",
            icon: "cart-outline",
          },
          {
            title: this.translate.instant("debts.title"),
            url: "/debts",
            icon: "card-outline",
          },
          {
            title: this.translate.instant("settings.title"),
            url: "/settings",
            icon: "settings-outline",
          },
        ];
      });
    });
  }
}
