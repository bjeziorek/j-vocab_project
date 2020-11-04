import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  mode = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  quizClick(): void {
    this.mode = 'quiz';
  }
  presentationClick(): void {
    this.mode = 'presentation';
  }
  backToLearnClick(): void {
    this.mode = 'none';
  }

}
