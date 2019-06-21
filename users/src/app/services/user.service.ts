import { Injectable } from '@angular/core';

import { User } from '../entities/user.entity';

@Injectable()
export class UserService {

    private users: User[];

    constructor() {
        this.users = [
            {  id:'1', firstName: 'Laura', lastName: 'Gonzalez', photo: 'amarillo.jpg', address: 'Altaria 123, Aguascalientes', phone: 123456789, email:'email.example.com', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.267669338823!2d-102.29183894972242!3d21.924258985449118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee66c314de7d%3A0xdff547d2b8c845ce!2sCentro+Comercial+Altaria!5e0!3m2!1ses-419!2sjp!4v1561057409464!5m2!1ses-419!2sjp' },
            {  id:'2', firstName: 'Ana', lastName: 'Perez', photo: 'azul.jpg', address: 'Galerias 124, Aguascalientes', phone: 123456788, email:'email1.example.com', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14805.07070306721!2d-102.29843186084905!3d21.92425873822421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efa953cba683%3A0x66983f869460faad!2sCentro+Comercial+Galerias!5e0!3m2!1ses-419!2sjp!4v1561057476254!5m2!1ses-419!2sjp' },
            {  id:'3', firstName: 'Diego', lastName: 'Hernandez', photo: 'rojo.jpg', address: 'Catedral 125, Aguascalientes', phone: 123456787, email:'email2.example.com', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.3991360075265!2d-102.29830204972325!3d21.880700785472143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee7cdce18e43%3A0xbb2fb10a45556cd!2sCatedral+de+Aguascalientes!5e0!3m2!1ses-419!2sjp!4v1561057594022!5m2!1ses-419!2sjp' },
            {  id:'4', firstName: 'Ricardo', lastName: 'Rodriguez', photo: 'verde.jpg', address: 'UAA 126, Aguascalientes', phone: 123456786, email:'email3.example.com', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7403.063599545842!2d-102.32116575494327!3d21.91409809181794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eee23dfea56d%3A0xc2edcc935471e5fa!2sUniversidad+Aut%C3%B3noma+de+Aguascalientes%2C+20130+Aguascalientes%2C+Ags.%2C+M%C3%A9xico!5e0!3m2!1ses-419!2sjp!4v1561057622473!5m2!1ses-419!2sjp' },
            {  id:'5', firstName: 'Gema', lastName: 'Martinez', photo: 'morado.jpg', address: 'UAA Campus Sur, Aguascalientes', phone: 123456785, email:'email4.example.com', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236898.13439374673!2d-102.4572294545635!3d21.914038446318333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ed24f2aaf497%3A0xea8c2db7172ee6cd!2sUniversidad+Aut%C3%B3noma+de+Aguascalientes+-+Campus+Sur!5e0!3m2!1ses-419!2sjp!4v1561057679297!5m2!1ses-419!2sjp' },
        ];
    }

    findAll(): User[] {
        return this.users;
    }

    find(id: string): User {
        return this.users[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
