import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  names = ['Frederick', 'Maria', 'Patrick', 'Patricia'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad-Freak'];
  images = ['5.webp', '2.webp', '3.webp', '4.webp'];

}