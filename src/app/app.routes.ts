import {Routes} from '@angular/router';
// import {AboutComponent} from './about/about.component';
import {SecondTaskComponent} from './secondTask/secondTask.component';
import {ItemListComponent} from './firstTask/item-list.component';
import {ItemComponent} from './firstTask/item.component';
// import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
// import {RepoListComponent} from './github/repo-list/repo-list.component';
// import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'secondTask', pathMatch: 'full'},
  {path: 'secondTask', component: SecondTaskComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'firstTask', component: ItemListComponent},
  {path: 'firstTask/:id', component: ItemComponent},
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

