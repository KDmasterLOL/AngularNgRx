import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs: Observable<Array<{ label: string, url: string }>> = of([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).pipe(map(() => this.createBreadcrumbs(this.activatedRoute.root)))
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') url += `/${routeURL}`

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
