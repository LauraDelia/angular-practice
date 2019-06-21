import { Component, OnInit } from '@angular/core';

import { User } from '../../entities/user.entity';
import { UserService } from "../../services/user.service";

@Component({
    templateUrl: 'directory.component.html',
    styleUrls: ['directory.component.css']
})

export class DirectoryComponent implements OnInit {

	private users: User[];

	constructor(
		private userService: UserService
	) { }

	ngOnInit() {
		this.users = this.userService.findAll();
	}


}