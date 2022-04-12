import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentIsGood = false;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  successfulPayment() {
    this.paymentIsGood = true;
    setTimeout(() => {
      this.router.navigate(['/home'], {relativeTo: this.route});
    }, 5000);
  }

}
