import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordOpen } from './recordopen.service';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'record-open',
  templateUrl: './recordopen.component.html',
  styleUrls: ['./recordopen.component.scss']
})
export class RecordOpenComponent implements OnInit {
  constructor(private createUserService : RecordOpen,private route : Router, private snapshot: ActivatedRoute) { }
  public userData : any = FormGroup; 
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  public id : string | null = this.snapshot.snapshot.paramMap.get('id');
  public roles : any = ["SuperUser","Admin","CEO"]
  public submitted = false;
  public user = localStorage.getItem('email');

  ngOnInit(): void {
    console.log(this.id);
    this.userData = new FormGroup({
      'insufficient_funds_override':new FormControl(null),
      'reference':new FormControl(null),
      'source_bu':new FormControl(null),
      'account_no': new FormControl(null),
      'name': new FormControl(null),
      'current_account_balance': new FormControl(null),
      'customer_no': new FormControl(null),
      'customer_name': new FormControl(null),
      'currency':new FormControl(null),
      'amount':new FormControl(null),
      'debit_amount_currency_equlvalent':new FormControl(null),
      'mru_equlvalent': new FormControl(null),
      'beneficiary_account': new FormControl(null),
      'beneficiary_name': new FormControl(null),
      'beneficiary_bank_name': new FormControl(null),
      'swift_code': new FormControl(null),
      'agreed_rate':new FormControl(null),
      'payment_details_1': new FormControl(null),
      'payment_details_2': new FormControl(null),
      'payment_details_3': new FormControl(null),
      'payment_details_4': new FormControl(null),
      'override_insufficient_funds': new FormControl(null),
      'comment_to_send_to_account_officer': new FormControl(null)
    });
  }

     
  

  onSubmit(){
    this.submitted = true;
    var data ={
      "businessKey": this.userData.value.reference,
      // "application": "k2k",
      "comments": this.userData.value.comment_to_send_to_account_officer,
      "transactionCurrency": this.userData.value.currency,
      "trasactionAmount":this.userData.value.amount,
      "amountInMur": this.userData.value.mru_equlvalent,
      "debitAccountNumber": this.userData.value.account_no,
      "accountShortName": this.userData.value.name,
      // "debitAccountCcy": this.userData.debit_amount_currency_equlvalent,
      "paymentDetails1": this.userData.value.payment_details_1,
      "paymentDetails2": this.userData.value.payment_details_2,
      "paymentDetails3": this.userData.value.payment_details_3,
      "paymentDetails4": this.userData.value.payment_details_4,
      "verified": this.userData.value.override_insufficient_funds,
      // "discrepancyReason":this.userData.,
      "customerNumber": this.userData.value.customer_no,
      "customerName": this.userData.value.customer_name,
      //"accountOfficer": this.userData.,
      //"altAccountOfficer": "avira",
      //"dateMailSent": "2023-12-20 00:00:00",
      "override": this.userData.value.insufficient_funds_override,
      "buName": this.userData.value.source_bu,
      "amountInDebitAccountCcy": this.userData.value.debit_amount_currency_equlvalent,
      "debitAccountBalance": this.userData.value.current_account_balance,
      "beneficiaryAccountNumber": this.userData.value.beneficiary_account,
      "beneficiaryName": this.userData.value.beneficiary_name,
      "beneficiaryBankName": this.userData.value.beneficiary_bank_name,
      "beneficiaryBankSwiftCode": this.userData.value.swift_code,
      "aggredRate": this.userData.value.agreed_rate
    };
    console.log(data);
    this.createUserService.creation(data)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>console.log(err))
  }

  goBack=()=>{
    this.route.navigate(["/availability"]);
  }
  
}
