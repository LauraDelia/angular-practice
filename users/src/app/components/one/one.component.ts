
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../entities/item.entity';
import { UserService } from '../../services/user.service';
import { PhonePipe } from '../../pipes/phone.pipe';

@Component({
	templateUrl: 'one.component.html',
	styleUrls: ['one.component.css']
})

export class OneComponent implements OnInit {

	private items: Item[] = [];
	

	constructor(
		private activatedRoute: ActivatedRoute,
		private userService: UserService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					user: this.userService.find(id),
				};
				if (localStorage.getItem('user') == null) {
					let user: any = [];
					user.push(JSON.stringify(item));
					localStorage.setItem('user', JSON.stringify(user));
				} else {
					let user: any = JSON.parse(localStorage.getItem('user'));
					let index: number = -1;
					for (var i = 0; i < user.length; i++) {
						let item: Item = JSON.parse(user[i]);
						if (item.user.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						user.push(JSON.stringify(item));
						localStorage.setItem('user', JSON.stringify(user));
					} else {
						let item: Item = JSON.parse(user[index]);
						user[index] = JSON.stringify(item);
						localStorage.setItem("user", JSON.stringify(user));
					}
				}
				this.items.push({
					user: item.user,
				});
			} 
		});
	}
}