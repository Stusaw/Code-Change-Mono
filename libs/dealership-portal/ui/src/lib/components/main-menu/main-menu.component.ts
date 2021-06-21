import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppMenuService, Menu } from '@shared-core';
import { replace, snakeCase } from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MainMenuComponent implements OnInit {
  public menus$: Observable<Menu[]> = this._menuService.getAll();

  constructor(private _menuService: AppMenuService) {
  }

  ngOnInit(): void {}

  buildRoute(routes: string[]) {
    let route = '';
    routes.forEach((item) => {
      if (item && item.trim()) {
        route += '/' + item.replace(/^\/+|\/+$/g, '');
      }
    });
    return route;
  }

  resolveMenuLabel(name: string) {
    let underscoreName = snakeCase(name);
    let replacedName = replace(underscoreName, 'menu_', '');
    return `global.routes.${replacedName}.label`;
  }
}
