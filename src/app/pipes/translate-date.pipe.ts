import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateDate'
})
export class TranslateDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // https://www.w3schools.com/js/js_date_methods.asp
    const index = new Date(value).getDay();
    const dayENG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNL = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const dayFR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const dayDE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

    if (!args) {
      args = navigator.language;
    }

    switch (args) {
      case 'nl':
        // translateDate:'nl'
        value = dayNL[index];
        break;
      case 'fr':
        // translateDate:'fr'
        value = dayFR[index];
        break;
      case 'de':
        // translateDate:'de'
        value = dayDE[index];
        break;
      default:
        // translateDate
        value = dayENG[index];
    }
    return value;
  }

}
