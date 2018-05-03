import { Component, OnInit, Output } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:User;
  userName:string;
  githubService:GithubService;
  public showInput = true;
  public showData = false;

  submitTheUsername() {
    this.githubService.getUserData(this.userName);
    this.showInput = false;
    this.showData = true;
  }

  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }

  constructor(githubService:GithubService) {
    this.githubService = githubService;
  }

  ngOnInit() {
  }

}
