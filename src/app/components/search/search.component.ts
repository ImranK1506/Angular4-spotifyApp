import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchStr:string;

  searchMusic(){
    console.log(this.searchStr);
  }
}
