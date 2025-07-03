import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  kpiData = [
    { title: 'Total Users', value: '1,250' },
    { title: 'Monthly Revenue', value: '$34,000' },
    { title: 'Active Sessions', value: '187' }
  ];
}
