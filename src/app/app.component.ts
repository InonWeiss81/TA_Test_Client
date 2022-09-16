import { Details } from './app.model';
import { AppService } from './app.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'TA_Test_Client';
  details: Details[] = [];
  detailsSub: Subscription | undefined;

  getDetails() {
    this.detailsSub = this.appService.getData().subscribe({
      next: (data) => this.details = data,
      error: () => alert('Could not fetch data from server')
    });
  }

  constructor(private appService: AppService) { }

  ngOnDestroy(): void {
    this.detailsSub?.unsubscribe();
  }
}
