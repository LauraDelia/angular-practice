import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'phone'
})

export class PhonePipe implements PipeTransform{
    transform(numberOriginal: number){
        let separate =  numberOriginal;
        let digits = (""+separate).split("");
        let result = "("+digits[0]+digits[1]+digits[2]+")-"+digits[3]+digits[4]+digits[5]+"-"+digits[6]+digits[7]+"-"+digits[8]+digits[9];
        
        return result;
    }
}