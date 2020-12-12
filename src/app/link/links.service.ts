import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILink } from '../interfaces/link';

@Injectable()
export class LinksService {
  linksArray: ILink[];
  constructor(private http:HttpClient,
    private router:Router) {
    this.linksArray=[]
  }

  getLinkArray(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/links', { withCredentials: true })
      .pipe(
        tap((results) => {

          this.linksArray = results as ILink[];

        })
      );
  }

  postLinkItem(obj: NgForm): void {
    const views=0;
    const newLink: ILink = { ...obj.value, views };
    this.http
      .post('http://localhost:3000/api/Links', newLink, {
        withCredentials: true,
      })
      .subscribe();
    this.linksArray.push(newLink);
  }

  deleteLinkItem(id: string):void {
    this.http
      .delete(`http://localhost:3000/api/links/${id}`, {
        withCredentials: true,
      })
      .subscribe();
  }

  updateViews(obj:ILink):void{
    const increasedViews=obj.views++;
    console.log('from patch');
    obj.views=increasedViews;
    this.http
    .patch(`http://localhost:3000/api/links/${obj._id}`,{withCredentials:true})
    .subscribe();

    // if(typeof obj.link!=='string'){
      window.location.href=obj.link.toString();
      // this.router.navigateByUrl(obj.link.toString());
    // }
    // else{
    //   this.router.navigateByUrl(obj.link);
    // }
  }



}
