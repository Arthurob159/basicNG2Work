import {Routes} from '@angular/router';
// import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './item/item-list.component';
import {ItemComponent} from './item/item.component';
// import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
// import {RepoListComponent} from './github/repo-list/repo-list.component';
// import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'item/:id', component: ItemComponent},
  // {path: 'github', component: RepoBrowserComponent,
    // children: [
      // {path: '', component: RepoListComponent},
      // {path: ':org', component: RepoListComponent,
        // children: [
          // {path: '', component: RepoDetailComponent},
          // {path: ':repo', component: RepoDetailComponent}
        // ]
      // }]
  // }
];

