import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '@services/breadcrumb.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink, NgIf, NgFor, AsyncPipe],
  templateUrl: './breadcrumb.component.html',
  standalone: true
})
export class BreadcrumbComponent {
  breadcrumbs: Observable<Array<{ label: string, url: string }>> = of([]);
  constructor(breadcrumbService: BreadcrumbService) { this.breadcrumbs = breadcrumbService.breadcrumbs }
}
