import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-gift-voucher',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-gift-voucher.component.html',
  styleUrl: './email-gift-voucher.component.scss'
})
export class EmailGiftVoucherComponent {
date:any = ''
ngOnInit(): void {
  this.date=new Date().getFullYear()
}
}
