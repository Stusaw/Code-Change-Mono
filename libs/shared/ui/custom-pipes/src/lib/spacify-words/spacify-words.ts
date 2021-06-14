import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'spacifyWords'
})
export class SpacifyWordsPipe implements PipeTransform {
    
    transform(value: string): any {
        return (!value) ? '' : value.split(/(?=[A-Z])/).join(" ");
    }
}