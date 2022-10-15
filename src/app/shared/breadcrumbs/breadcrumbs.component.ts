import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo!: string
  public titulosubs$: Subscription

  constructor(private router: Router) {
    this.titulosubs$ = this.getArgumentosRuta()
    .subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    })
  }
  ngOnDestroy(): void {
    this.titulosubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd), 
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),  
    )
  }


}
