import { Output, OnInit, OnDestroy, Directive } from "@angular/core";
import { EventEmitter } from "events";
import { Subscription } from "rxjs";
import { SortService, ColumnSortedEvent } from "./services/sort-service";

@Directive({
    selector: '[sortable-table]'
  })
export class SortableTableDirective implements OnInit, OnDestroy {

    constructor(private sortService: SortService) { }

    // event: ColumnSortedEvent;

    @Output()
    sorted = new EventEmitter();

    private columnSortedSubscription: Subscription;

    ngOnInit() {
        this.columnSortedSubscription = this.sortService.columnSorted$
        .subscribe(event => {
            this.sorted.emit(event.toString());
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }
}