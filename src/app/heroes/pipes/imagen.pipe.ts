import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: any ): string {
    return `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;
  }

}
