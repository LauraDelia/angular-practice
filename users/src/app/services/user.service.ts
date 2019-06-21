import { Injectable } from '@angular/core';

import { User } from '../entities/user.entity';

@Injectable()
export class UserService {

    private users: User[];

    constructor() {
        this.users = [
            {  id:'1', firstName: 'Laura', lastName: 'Gonzalez', photo: 'amarillo.jpg', address: 'Altaria 123, Aguascalientes', phone: 1234567890, email:'email.example.com'},
            {  id:'2', firstName: 'Ana', lastName: 'Perez', photo: 'azul.jpg', address: 'Galerias 124, Aguascalientes', phone: 1234567882, email:'email1.example.com'},
            {  id:'3', firstName: 'Diego', lastName: 'Hernandez', photo: 'rojo.jpg', address: 'Catedral 125, Aguascalientes', phone: 1234567874, email:'email2.example.com'},
            {  id:'4', firstName: 'Ricardo', lastName: 'Rodriguez', photo: 'verde.jpg', address: 'UAA 126, Aguascalientes', phone: 1234567862, email:'email3.example.com'},
            {  id:'5', firstName: 'Gema', lastName: 'Martinez', photo: 'morado.jpg', address: 'UAA Campus Sur, Aguascalientes', phone: 1234567857, email:'email4.example.com'},
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
