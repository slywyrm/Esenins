import { Injectable } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item.model';
import { ProjectsBySections, ProjectSection } from '../../models/project-section';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {
  // private projects = new BehaviorSubject<ProjectSection[]>([
  //   {
  //     id: 'hotels',
  //     name: 'отели',
  //     projects: [
  //       { name: 'Гостиничный комплекс «Гранд Отель Звезда» г. Тверь', portfolioId: '2', copyright: 'DKStudio' },
  //       { name: 'Ибис г. Иркутск', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ибис г. Тбилиси', copyright: 'Sundukovy Sisters' },
  //       { name: 'Mercure г. Калининград', copyright: 'Sundukovy Sisters' },
  //       { name: 'Mercure г. Нижний Новгород', copyright: 'Sundukovy Sisters' },
  //       { name: 'Mercure г. Саранск', copyright: 'Sundukovy Sisters' },
  //       { name: 'Mercure г. Благовещенск', copyright: 'Sundukovy Sisters' },
  //       { name: 'Radisson BLU г. Ростов-на-Дону', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ибис г. Москва', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ибис budget г. Москва', copyright: 'Sundukovy Sisters' },
  //       { name: 'Концепт-проект Radisson BLU г. Волгоград', copyright: 'Sundukovy Sisters' },
  //       { name: 'Эко-мини-отель «Ласточка» г. Туапсе (концепт-проект)' },
  //       { name: 'Концепт-проект номерного фонда 3 звезды г. Сочи' },
  //       { name: 'Концепт-проект номерного фонда 4 звезды г. Батуми' },
  //       { name: 'Концепт-проект номерного фонда 3 звезды г. Москва' },
  //       { name: 'Концепт-проект номерного фонда 4 звезды г. Москва' }
  //     ]
  //   },
  //   {
  //     id: 'other',
  //     name: 'другие',
  //     projects: [
  //       { name: 'Салон «The Beauty Bar» г. Химки', portfolioId: '7' },
  //       { name: 'Концепт-проект салона-магазина мебельной фабрики Openorion г. Москва' },
  //       { name: 'Выстовочный стенд мебельной фабрики Openorion г. Москва' },
  //       { name: 'Foodtruck "pitApitA" г. Москва', portfolioId: '10' }
  //     ]
  //   },
  //   {
  //     id: 'bars',
  //     name: 'рестораны и бары',
  //     projects: [
  //       { name: 'Бар «Johny Josper pub» г. Москва', copyright: 'DKStudio' },
  //       { name: 'Ресторан «Воронеж» г. Москва, ул. Пречистенка', portfolioId: '8', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан «Воронеж» г. Москва, ул. Малая Дмитровка', portfolioId: '9', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан Гранд Кафе г. Тверь', portfolioId: '4', copyright: 'DKStudio' },
  //       { name: 'Караоке-бар «Музыкант» г. Тверь', copyright: 'DKStudio' },
  //       { name: 'Ресторан «Мандарин, Лапша и Утки» г. Москва', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан «Salumeria» г. Москва', portfolioId: '1', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан «Remiy Kitchen Bakery» г. Москва', portfolioId: '3', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан «Queen Project» г. Казань', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан в Lotte Plaza г. Москва (концепт-проект)', copyright: 'Sundukovy Sisters' },
  //       { name: 'Ресторан «Wright Brothers BAR & RESTAURANT» г. Москва (концепт-проект)' },
  //       { name: 'Столовая free-flo г. Москва (концепт-проект)' },
  //       { name: 'Ресторан Портленд г. Калининград', portfolioId: '6', copyright: 'Sundukovy Sisters' },
  //       { name: 'Корнер PinzaUno г. Москва, ул. Рождественка FOOD STORE' }
  //     ]
  //   },
  //   {
  //     id: 'flats',
  //     name: 'квартиры',
  //     projects: [
  //       { name: 'Квартира 120 кв.м. г. Москва, Богословский пер.', copyright: 'Sundukovy Sisters' },
  //       { name: 'Квартира г. Москва, ул. Остоженка', portfolioId: '5', copyright: 'DKStudio' },
  //       { name: 'Квартира г. Тверь', copyright: 'DKStudio' },
  //       { name: 'Квартира г. Москва, ул. Мосфильмовская', copyright: 'DKStudio' },
  //       { name: 'Квартира г. Одинцово', copyright: 'DKStudio' },
  //       { name: 'Кваритра г. Москва, Университет' },
  //       { name: 'Квартира г. Зеленоград, район «Зеленый бор»' },
  //       { name: 'Квартира г. Химки, район Левобережный' },
  //       { name: 'Квартира г. Зеленоград' },
  //       { name: 'Квартира 55 кв.м. г. Москва, м. Академическая' },
  //       { name: 'Квартира 72 кв.м. г. Москва, м. Войковская' }
  //     ]
  //   },
  //   {
  //     id: 'cottages',
  //     name: 'дома',
  //     projects: [
  //       { name: 'Коттедж, МО, поселок Николо-Черкизово' },
  //       { name: 'Загородный дом СНТ Родник, Московская область' }
  //     ]
  //   }
  // ]);

  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<PortfolioItem[]> {
    return this.http.get<PortfolioItem[]>('/projects/portfolio');
  }

  getPortfolioItem(id: string): Observable<PortfolioItem> {
    return this.http.get<PortfolioItem>(`/projects/portfolio/${id}`);
  }

  getProjects(): Observable<ProjectsBySections> {
    // return this.projects.asObservable().pipe(
    //   take(1),
    //   map((projectSections: ProjectSection[]) => projectSections.reduce((acc , section) => {
    //     acc[section.id] = section;
    //     return acc;
    //   }, {}))
    // );
    return this.http.get<ProjectsBySections>('/projects');
  }

}
