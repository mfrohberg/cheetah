import {Component} from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})

export class AppComponent {
  title: 'The Aristocrats'
}
