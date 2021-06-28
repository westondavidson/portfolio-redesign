import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent implements OnInit {
  
  githubCommits: string = "";
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.GetContributions().subscribe
    (
      commits =>
      {
        this.githubCommits = commits;
        this.githubCommits.replace(/\D/g,'');
      }
    )


  }

}
