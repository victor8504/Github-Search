import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  user: User;
  repoDetails = [];
  githubService:GithubService;
  hideInput: boolean;

  constructor(githubService:GithubService) {
    this.githubService = githubService;
  }

  @Output() toggleBack = new EventEmitter();

  goBack() {
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }

  ngOnInit() {
    this.user = this.githubService.user;
    this.repoDetails = this.githubService.repoData;
  }

}
