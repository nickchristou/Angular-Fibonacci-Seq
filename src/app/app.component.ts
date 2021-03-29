import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Fibonacci Sequence</h1>
  <br>
  <div>Please enter n to analyse and click process:</div>
  <br>
      <input #newInput
      (keyup.enter)="analyse(newInput.value)"
      >
  <button (click)="analyse(newInput.value)">Process</button>
  <br>
  <br>
  <div>Result:</div>
  <div>{{ output }}</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fibonacci-seq';
output = "";

  //Analyse fibonacci number for entered N
  analyse(newInput : string) {

  //reset output each run
  this.output = "";

  //method vars
  let seqNum = 0;
  let fibNumMinus = 0;
  let fibNum = 1;
  let fibNumPlus = 1;


    //Verify input is valid positive integer
    if (isNaN(parseInt(newInput)) || !Number.isInteger(Number(newInput)) || newInput.indexOf('-') > -1)
    {
      this.output = "Must be valid and positive integer";
      return;
    }
    else
    {
      //Set sequence number
      seqNum = parseInt(newInput);
      
      //Check for 0 and 1 (hardcode this output without summation)
      if (seqNum == 0 || seqNum == 1){
        fibNumPlus = seqNum;
        this.output = fibNumPlus.toString();
        return;
      }

      //Fibonacci shuffle:
      //latest iteration fibonacci num = sum of previous 2
      //reset previous 2 nums
      for (let i=2; i<=seqNum; i++)
      {
        fibNumPlus = fibNumMinus + fibNum;
        fibNumMinus = fibNum;
        fibNum = fibNumPlus;
      }

      //Print output
      this.output = fibNumPlus.toString();
    }
  }
}
