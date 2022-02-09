import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem
title="hello world";
contenu;
name:string;
text="Bonsoir"
date=new Date()

nameList=['Ali','Salah','Ahmed','imen']

condition=false




 

  constructor() { }

  ;

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
          {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
          {label: 'Documentation', icon: 'pi pi-fw pi-file'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];
  
      this.activeItem = this.items[0];
  }

}
