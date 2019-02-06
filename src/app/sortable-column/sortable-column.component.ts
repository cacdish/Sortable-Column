import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortService } from '../services/sort-service';
import { EtatCivil } from '../models/Etat-civil-model';
import { EtatCivilService } from '../services/etats-civils-service';

@Component({
  selector: 'sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  private columnSortedSubscription: Subscription;

  etatsCivils: EtatCivil[];

  etatCivilSubscription: Subscription;

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    // this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  // constructor(private sortService: SortService, private service: EtatCivilService) { }
  constructor(private service: EtatCivilService) { }

   ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    // this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
    //   this.columnSortedSubscription = this.service.columnSorted$.subscribe(event => {
    //   // reset this column's sort direction to hide the sort icons
    //   if (this.columnName != event.sortColumn) {
    //     this.sortDirection = '';
    //   }
    // });
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


  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
