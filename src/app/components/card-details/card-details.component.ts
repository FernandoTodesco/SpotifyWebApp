import { Component, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  @Input() cardItem;
  private searchResult: any[] = [];

  constructor(private searchService: SearchService) { }

  clearSearch() {
    this.searchService.clearEvent(this.searchResult);
  }
}
