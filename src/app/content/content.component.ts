import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  title = 'content-section';
  userName: string;
  flag: boolean;

  public displayName(flag: boolean) {
    this.flag = flag;
    this.userName = this.flag ? 'Boy': 'Girl';
  }
}
