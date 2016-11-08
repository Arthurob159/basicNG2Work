import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
// import {GithubService} from "./github/shared/github.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
// import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './item/item-list.component';
import {ItemComponent} from './item/item.component';
import {ItemService} from './item/item.service';
// import {FilterByPipe} from './shared/pipe/filter-list.pipe';
import {ItemFilterComponent} from './item/item-filter.component';
// import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
// import {RepoListComponent} from './github/repo-list/repo-list.component';
// import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemFilterComponent, ItemComponent, HomeComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ItemService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
