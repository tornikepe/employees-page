import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    if (this.userId !== '') {
      //view user details
      this.userService
        .viewUsers(this.userId)
        .toPromise()
        .then((data) => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);

          this.editUserForm = this.formBuilder.group({
            username: new FormControl(this.userDetails.name),
            email: new FormControl(this.userDetails.email),
          });

          this.dataLoaded = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(
      (data) => {
        this._snackBar.open('User updated successfully');
      },
      (err) => {
        this._snackBar.open('Unable to update user');
      }
    );
  }
}
