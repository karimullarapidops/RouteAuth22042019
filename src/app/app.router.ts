import { Route } from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { IndexRoutes } from './index/index.router';
import { NoPageRoutes } from './no-page/no-page.router';

export const routes: Route[] = [...HomeRoutes, ...IndexRoutes, ...NoPageRoutes];