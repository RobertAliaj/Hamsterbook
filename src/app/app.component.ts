import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
postText = [
  'Hallo, mein Name ist Freddy Hamster. Ich bin hier um Angular zu lernen.',
  'Hey Zusammen, hier ein Bild von meinem Urlaub',
  'Hey, mein Nahme ist Nola',
  'Ich mag Paprika'
];


photos = [
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp'
];


}
