import { getUserLoaded, getUserLoading, getUserUsers,  } from './../../../ngrx/reducers/user.reducer';
import { UserListAction, UserListCreatorSuccess } from './../../../ngrx/actions/user.action';
import { Users } from './../../../modal/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { select, Store } from '@ngrx/store';
import { getUserStateUser, RootReducerState } from 'src/app/ngrx/reducers';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private userService: UsersService,  private readonly store: Store) { }

  users: Users[] = []
  isLoading:boolean = false
  isLoaded: boolean = false
  p: number = 1;
  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.store.dispatch(new UserListAction())
    this.userService.getAllUser().subscribe((res:any) => {
     
      this.store.dispatch(new UserListCreatorSuccess(res.users))
    })

    this.store.select(getUserStateUser).subscribe((res:any) => {
      this.users = res
    })
  }

}
