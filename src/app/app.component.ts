import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DetroitDinnerCode';
  mobileDisplay = "off"

  showLinks(){
    const links = document.getElementsByClassName("links") as HTMLCollectionOf<HTMLElement>;
    

    switch(this.mobileDisplay) {
      case "off":
        links[0].className += ' showLinks';
        this.mobileDisplay = "on";
        console.log(this.mobileDisplay);
        break;

      case "on":
        links[0].className = ' links'
        this.mobileDisplay = "off";
        console.log(this.mobileDisplay);
        break;
    }
    
  }
}


