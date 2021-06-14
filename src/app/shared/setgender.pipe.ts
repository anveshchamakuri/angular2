import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setgender'
})
export class SetgenderPipe implements PipeTransform {

  transform(value: string):string {
   if(value =='1'){
     return 'male'
   } else{
     return 'female'
   }
  }

}
