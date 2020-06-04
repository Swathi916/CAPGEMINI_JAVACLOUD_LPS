import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loan'
})
export class LoanPipe implements PipeTransform {

  transform(loans:any[], searchValue:string,fieldName):any{
    if(!loans){
      return [];
    }
    if(!searchValue){
      return loans;
    }
    searchValue = searchValue.toLowerCase();
      return loans.filter(loans=>{
        return loans[fieldName].toLowerCase().includes(searchValue);
      });
    }
  }



