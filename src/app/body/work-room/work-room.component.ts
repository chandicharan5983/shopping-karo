import { Component } from '@angular/core';

@Component({
  selector: 'app-work-room',
  templateUrl: './work-room.component.html',
  styleUrls: ['./work-room.component.scss']
})
export class WorkRoomComponent {

  policyArray = [
    {
      name: 'Bonus Plus',
      dsc: 'Make fun of shopping and collect bonuses',
      img: 'card_giftcard',
    },
    {
      name: 'Free Shipping',
      dsc: 'Free shipping on all orders over $99',
      img: 'local_shipping',
    },
    {
      name: 'Money Back Guarantee',
      dsc: '30 Days money return guarantee',
      img: 'monetization_on',
    },
    {
      name: 'Online Support 24/7',
      dsc: 'Call us: (+100) 123 456 7890',
      img: 'history',
    },
  ];

}
