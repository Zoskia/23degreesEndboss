import { Component } from '@angular/core';
import { Client, Account } from 'appwrite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'endboss';

  client: Client;

  constructor() {
    this.client = new Client();
    this.client.setEndpoint('http://localhost/').setProject('645e45e8e98afe096d8b');
  }
}
