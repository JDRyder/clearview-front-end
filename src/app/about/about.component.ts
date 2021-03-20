import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  h1Style: boolean = false;
  users: any;

  constructor(private data: DataService) {
    this.users=[]
   }

  ngOnInit(): void {
    this.data.getUsers().subscribe(data=>{
      this.users = data
      console.log(this.users)
    })
  }

  secondClick(){
    this.data.dataClick();
  }
}
