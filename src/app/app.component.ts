import {Component, OnInit} from '@angular/core';
import '../../public/css/styles.css';
import {FirebaseAuth, AngularFire} from 'angularfire2';
import {GithubService} from './services/github.service'

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  providers: [GithubService]
})

export class AppComponent implements OnInit {
  title: 'The Aristocrats';
  username = this.af.auth.getAuth().github.username || '';
  projects: any = []
  
  constructor(
    public github: GithubService,
    public auth: FirebaseAuth,
    public af: AngularFire
  ) {}
  
  login() {
    this.auth.login()
      .then(() => {
        this.username = this.af.auth.getAuth().github.username
      })  
  }
  
  logout() {
    this.auth.logout()
    this.username = '';
  }
  
  findProjects() {
    return this.github.getUserRepos()
      .subscribe(
        repos => {
          repos.data.map((repo) => {
            console.log(repo.name)
          })
        },
        err => console.error(err),
        () => {
          console.log('done')
        }
      )
  }
  ngOnInit() {
    console.log('hey')
  }
  
}
