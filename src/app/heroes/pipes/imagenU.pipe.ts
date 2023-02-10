import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenU'
})
export class ImagenUPipe implements PipeTransform {

  transform( heroe: any ): string {
    return `${heroe.data.results[0].thumbnail.path}.${heroe.data.results[0].thumbnail.extension}`;
  }

}