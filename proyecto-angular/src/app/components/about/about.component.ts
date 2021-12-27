import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public web: String;

  constructor() {
    this.title = 'Marco Rafael Ruvalcaba Espinoza';
    this.subtitle = 'Ing. en Sistemas y Desarrollador Web';
    this.web = 'mruvalcaba.com';
  }

  ngOnInit(): void {}
}
