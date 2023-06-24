import { Component, OnInit } from '@angular/core';
import { getData } from 'src/app/helpers/storage.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Evento executado antes do componente abrir
  ngOnInit(): void {
    console.log(getData('auth'));
  }

}
