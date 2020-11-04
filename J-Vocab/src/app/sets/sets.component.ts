import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {
  mode = 'none';
  constructor() { }

  ngOnInit(): void {
  }

  manageSetsClick(): void {
    this.mode = 'manage-sets';
  }
  manageResourcesClick(): void {
    this.mode = 'manage-resources';
  }
  backToLearnClick(): void {
    this.mode = 'none';
  }

}
