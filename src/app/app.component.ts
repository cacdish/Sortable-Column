import { Component } from '@angular/core';
import { EtatCivil } from './models/Etat-civil-model';
import { Subscription } from 'rxjs';
import { EtatCivilService } from './services/etats-civils-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // customers: Customer[];
  etatsCivils: EtatCivil[];

  etatCivilSubscription: Subscription;

  constructor(private service: EtatCivilService) { }
  
  ngOnInit() {
    this.getEtatsCivils();
  }

  getEtatsCivils() {
    this.etatCivilSubscription = this.service.getEtatsCivils()
      .subscribe(
        (data) => {
          this.etatsCivils = data;
        }, (error) => {
          console.log(error);
        }, () => {
          console.log("Chargement terminé !");
        }
      );
  }

}
