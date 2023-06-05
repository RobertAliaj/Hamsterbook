import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {

  @Input() name: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() canFollow: Boolean= true;


  constructor(public fs: FriendService){

  }
}
 