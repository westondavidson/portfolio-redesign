import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-github-stats',
  templateUrl: './github-stats.component.html',
  styleUrls: ['./github-stats.component.css']
})
export class GithubStatsComponent implements OnInit {
  
  githubCommits: string = "";
  parsedCommits = "";
  lineCount: String[] = ["test"];
  constructor(private githubService: GithubService) {
   }

  ngOnInit(): void {
    this.githubService.GetContributions().subscribe
    (
      commits =>
      {
        //debugger;
        this.githubCommits = commits;
        this.GitCommitParse();
      }
    )


  }


  GitCommitParse()
  {
    // debugger;
    //this.githubCommits.replace(/\D/g,'');
    this.lineCount = this.githubCommits.split(/\r\n|\r|\n/);
    this.parsedCommits = this.lineCount[9].trim();
    //console.log(this.parsedCommits);
  }
}
