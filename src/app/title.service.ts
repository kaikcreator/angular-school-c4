import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private titleSubject:Subject<string> = new Subject();
    public title$:Observable<string> = this.titleSubject.asObservable();

    constructor(
        private router:Router,
        private activatedRoute:ActivatedRoute
    ){ 
        this.init();
    }

    init(){
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((evt:NavigationEnd) => evt.url),
        ).subscribe(title => this.titleSubject.next(title));
    }

}