import { Component } from '@angular/core';
import { CommonService } from '../../../Core/common.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  providers: [CommonService],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
