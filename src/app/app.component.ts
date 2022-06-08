import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cliente', url: '/cliente', icon: 'person-add' },
    { title: 'Produto', url: '/produto', icon: 'cube' },
    
  ];

  constructor() {}
}
