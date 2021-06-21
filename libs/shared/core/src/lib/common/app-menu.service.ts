import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Menu {
  route: string;
  name: string;
  icon: string;
  // label?: MenuTag;
}

@Injectable()
export class AppMenuService {
  private menu$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);

  getAll(): Observable<Menu[]> {
    return this.menu$.asObservable();
  }

  set(menu: Menu[]): Observable<Menu[]> {
    this.menu$.next(menu);
    return this.menu$.asObservable();
  }

  /** Menu for translation */
  recursMenuForTranslation(menu: Menu[], namespace: string) {
    menu.forEach((menuItem) => {
      menuItem.name = `${namespace}.${menuItem.name}`;
    });
  }
}
