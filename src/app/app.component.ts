import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from '@components/layout/layout.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
