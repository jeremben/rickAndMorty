import { Component } from '@angular/core';
import {AppLoaderService} from './app-loader.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private appLoaderService : AppLoaderService) { }
}
