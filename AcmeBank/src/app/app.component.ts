import { Component, OnInit } from '@angular/core';

import {AccountServiceService} from "./account-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AcmeBank';

  accountNumber: any;
  accountType: any;
  accountBalance: any;
  accounts: Array<any> = [];

  balance = 0;

  constructor(private service : AccountServiceService){}


  ngOnInit():void{

    this.service.getAccounts().subscribe((data : any) =>
    {

        this.accounts = data;        
        this.getBalance();
        
    });
    
    console.log(this.accounts)
  }

  


  getBalance(){

     for(let i=0; i < this.accounts.length; i++){

      this.balance += parseFloat(this.accounts[i].balance)

    } 
  }

  withdrawAccount(){

    alert("Success")


  }


}
