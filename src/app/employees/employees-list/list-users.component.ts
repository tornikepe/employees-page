import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/employees.service';
export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;
  listUsers: User[] = [];

  constructor(private userServie: UserService) {}

  ngOnInit(): void {
    this.userServie.listUsers().subscribe((data) => {
      this.listUsers = data;
    });
  }

  employeeList: any;
  page: any;
  maxSize = 9;

  public config: any = {
    id: 'advanced',
    itemsPerPage: 4,
    currentPage: 1,
  };

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }
}
