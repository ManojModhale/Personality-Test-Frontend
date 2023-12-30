import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  OpennessM:number=40
  ExtraversionM:number=20
  conscientiousnessM:number=50
  AgreeablenessM:number=60
  NeuroticismM:number=40
  Total:number=30
  Username:string="Bhagya"

}
