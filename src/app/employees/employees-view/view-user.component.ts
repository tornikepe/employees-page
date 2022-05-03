import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute
  ) {}
  userId: string = '';
  userDetails: any;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data) => {
      this.userId = data.id;
    });
    this.userService.viewUsers(this.userId).subscribe((data) => {
      this.userDetails = data;
    });
  }
}
