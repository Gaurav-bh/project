import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { cooperateLeader } from 'src/cooperate-leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ab:AboutService) { }

  ngOnInit(): void {
    this.getallleader();
  }
  leaders:cooperateLeader[]=[];

  getallleader()
  {
    this.ab.getusers().subscribe(
      (data) =>
        {
          this.leaders = data;
          console.log(this.leaders)
         },
        (error) => console.log (error)
    );
  }
}
