import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 

    const url = localStorage.getItem('theme') || `./assets/css/colors/purple-dark.css`
    this.linkTheme?.setAttribute('href', url);

  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.chackCurrentTheme();
  }

  chackCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    
    links.forEach(elem =>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`; //Construyo el url tal cual el que uso para cambiar el color 
      const currentTheme = this.linkTheme?.getAttribute('href'); //extraigo el enlace
      //si coinsiden debo de poner el wprking
       if (btnThemeUrl === currentTheme) {
          elem.classList.add('working');
       }
    })
    
  }


}
