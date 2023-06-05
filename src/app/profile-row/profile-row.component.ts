import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {

  @Input() name: string = '';
  @Input() img: string = '';
  @Input() description: string = '';

}
 