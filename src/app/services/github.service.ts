import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';
const githubApi = require('github-api') 


@Injectable()
export class GithubService {
    
    constructor(
        public http: Http,
        public af: AngularFire
    ) { }

    getUserRepos(): any {
        let gh = new githubApi({
            token: this.af.auth.getAuth().github.accessToken
        })
        let me = gh.getUser()
        return Observable.fromPromise(me.getRepos())
            .map((res) => res)
            .catch((this.handleError))
    }
    

    private handleError (error: Response) {
        return Observable.throw({
            body: error.json(),
            status: error.status
        });
    }
}
