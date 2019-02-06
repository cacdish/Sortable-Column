import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EtatCivil } from "../models/Etat-civil-model";
import { Subject, Observable } from "rxjs";
import { ColumnSortedEvent } from "./sort-service";
// import { ColumnSortedEvent } from "./column-sorted-event-interface";

@Injectable()
export class EtatCivilService {

    etatCivilSubject = new Subject<EtatCivil[]>();

    etatCivil: EtatCivil;
    private etatsCivils: EtatCivil[];

    // pagesEtatsCivils: any;

    constructor(private httpClient: HttpClient) { }

    private columnSortedSource = new Subject<ColumnSortedEvent>();

    columnSorted$ = this.columnSortedSource.asObservable();

    columnSorted(event: ColumnSortedEvent) {
        this.columnSortedSource.next(event);
    }


    emitEtatCivilSubject() {
        this.etatCivilSubject.next(this.etatsCivils.slice());
    }

    getEtatsCivils(): Observable<any> {
        return this.httpClient.get("http://localhost:8080/etatsCivils");
    }

    rechercheEtatsCivils(motCle: string, page: number, size: number): Observable<any> {
        // const etatCivilSubject = new Subject<EtatCivil[]>();
        return this.httpClient.get("http://localhost:8080/chercherEtatsCivils?motCle=" + motCle + "&page=" + page + "&size=" + size);
        // return this.httpClient.get('http://localhost:8080/chercherEtatsCivils?motCle=motCle&page=page&size=size');
        // .pipe(map(
        //      (resp: Response) => this.etatsCivils),
        //     catchError(
        //         (e: Response) => throwError(e))
        // )
    }

    getEtatCivil(id: number): Observable<any> {
        // const etatCivilSubject = new Subject<EtatCivil[]>();
        return this.httpClient.get("http://localhost:8080/etatsCivils/" + id);
    }

    saveEtatCivil(etatCivil: EtatCivil): Observable<any> {
        // const etatCivilSubject = new Subject<EtatCivil[]>();
        return this.httpClient.post("http://localhost:8080/etatsCivils", etatCivil);
    }

    updateEtatCivil(etatCivil: EtatCivil): Observable<any> {
        // const etatCivilSubject = new Subject<EtatCivil[]>();
        return this.httpClient.put("http://localhost:8080/etatsCivils/" + etatCivil.id, etatCivil)
        // .pipe(map(
        //     (resp=>this.etatCivil)
        // ));
    }

    deleteEtatCivil(etatCivil: EtatCivil): Observable<any> {
        // const etatCivilSubject = new Subject<EtatCivil[]>();
        return this.httpClient.delete("http://localhost:8080/etatsCivils/" + etatCivil.id)
        // .pipe(map(
        //     (resp=>this.etatCivil)
        // ));
    }

    getParametre(){
        return this.httpClient.get('/recherche', { params: { status }});
    }

    // getEtatsCivils(): Observable<any> {
    //     // const etatCivilSubject = new Subject<EtatCivil[]>();
    //     // return this.httpClient.get('http://localhost:8080/chercherEtatsCivils?motCle="+motCle+"&page="+page+"&size="+size');
    //     return this.httpClient.get('http://localhost:8080/chercherEtatsCivils?motCle=&page=0&size=5');
    //     // .pipe(map(
    //     //      (resp: Response) => this.etatsCivils),
    //     //     catchError(
    //     //         (e: Response) => throwError(e))
    //     // )
    // }
    // getEtatsCivils(motCle: string, page: number, size: number): Observable<any> {
    //     // const etatCivilSubject = new Subject<EtatCivil[]>();
    //     return this.httpClient.get("http://localhost:8080/chercherEtatsCivils?motCle=" + motCle + "&page=" + page + "&size=" + size);
    //     // return this.httpClient.get('http://localhost:8080/chercherEtatsCivils?motCle=motCle&page=page&size=size');
    //     // .pipe(map(
    //     //      (resp: Response) => this.etatsCivils),
    //     //     catchError(
    //     //         (e: Response) => throwError(e))
    //     // )
    // }

    // getEtatsCivils_(): Observable<EtatCivil[]> {
    //     return this.httpClient
    //         .get<EtatCivil[]>('http://localhost:8080/chercherEtatsCivils');
    // }

    /*getEtatsCivils_(): Observable<EtatCivil[]> {
        const etatCivilSubject = new Subject<EtatCivil[]>();

        this.httpClient
            .get<EtatCivil[]>('http://localhost:8080/chercherEtatsCivils')
            .pipe(map(
                (resp: Response) => resp.json()),
                catchError(
                    (e: Response) => throwError(e))
            )
            .subscribe((data) => {
                // etatCivilSubject.next(data);
                this.pageEtatsCivils = data;
            });
        return etatCivilSubject;
    }*/

    // getEtatsCivils() {
    //     return this.httpClient
    //         .get<EtatCivil[]>('http://localhost:8080/chercherEtatsCivils')
    // .subscribe(
    //     (response) => {
    //         this.etatsCivils = response;
    //         this.emitEtatCivilSubject();
    //     },
    //     (error) => {
    //         console.log('Erreur ! ' + error);
    //     }
    // );
    // }

    /*-----------------------------------------------*/

    // saveEtatCivilToDB() {
    //     this.httpClient
    //         .put<EtatCivil>('http://localhost:8080/etatsCivils', this.etatCivil)
    // .subscribe(
    //     (response) => {
    //         this.etatCivil = response;
    //         this.emitEtatCivilSubject();
    //         console.log('Enregistrement terminé !');
    //     },
    //     (error) => {
    //         console.log('Erreur ! ' + error);
    //     }
    // );
    // }



    getEtatCivilById(id: number) {
        const etatCivil = this.etatsCivils.find(
            (etatCivilObject) => {
                return etatCivilObject.id === id;
            }
        );
        return etatCivil;
    }


    onDelete(id: number) {

    }



    // export interface ColumnSortedEvent {
    //     sortColumn: string;
    //     sortDirection: string;
    // }

}