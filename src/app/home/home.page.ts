import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'indicar amigos' },
    { icon: 'phone-portrait-outline', text: 'Recarga de celular'},
    { icon: 'wallet-outline', text: 'Depositar'},
    { icon: 'options-outline', text: 'Ajustar limite'},
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar'},
    { icon: 'lock-open-outline', text: 'Bloquear Cartão'},
    { icon: 'car-outline', text: 'Cartão virtual'}
  ];
  public slidesOptions: any = {slidesPerView: 3, freeMode: true};
  public itens: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar conta' },
    { icon: 'help-circle-outline', text: 'Me ajuda' }
  ];

  constructor () { }

}
