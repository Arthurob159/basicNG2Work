import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
// import {GithubService} from "./github/shared/github.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
// import {AboutComponent} from './about/about.component';
import {SecondTaskComponent} from './secondTask/secondTask.component';
import {ItemListComponent} from './firstTask/item-list.component';
// import {ItemListComponent} from './firstTask/item-list.component';
import {ItemComponent} from './firstTask/item.component';
import {ItemService} from './firstTask/item.service';
// import {FilterByPipe} from './shared/pipe/filter-list.pipe';
import {ItemFilterComponent} from './firstTask/item-filter.component';
// import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
// import {RepoListComponent} from './github/repo-list/repo-list.component';
// import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemFilterComponent, ItemComponent, SecondTaskComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ItemService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
