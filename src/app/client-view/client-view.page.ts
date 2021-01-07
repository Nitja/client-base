import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.page.html',
  styleUrls: ['./client-view.page.scss'],
})
export class ClientViewPage implements OnInit {
  client = []; //current client to view

  constructor(private route: ActivatedRoute, private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    let clientsShown = this.dataService.getClientsSortedByName();
    this.route.params.subscribe((param) => {
      this.client = clientsShown[param.id];
    });
  }

}
