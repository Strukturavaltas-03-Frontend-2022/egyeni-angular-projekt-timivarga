import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string,
  key: string,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  movieTableColumns: ITableColumn[] = [
    {title: 'Id', key: 'id'},
    {title: 'Title', key: 'title'},
    {title: 'Genre', key: 'genre'},
    {title: 'Director', key: 'director'},
    {title: 'Year', key: 'releaseYear'},
    {title: 'Poster', key: 'poster'},
    {title: 'Studio', key: 'studio'},
    {title: 'Active', key: 'active'},
  ];

  constructor() { }
}
