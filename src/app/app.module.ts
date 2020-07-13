import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductImageComponent } from './products-all/product-image/product-image.component';
import { ProductDepartmentComponent } from './products-all/product-department/product-department.component';
import { PriceDisplayComponent } from './products-all/price-display/price-display.component';
import { ProductRowComponent } from './products-all/product-row/product-row.component';
import { ProductsListComponent } from './products-all/products-list/products-list.component';
import { ProductsAllComponent } from './products-all/products-all.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { VoteDomainComponent } from './vote-domain/vote-domain.component';
import { ArticleComponent } from './vote-domain/article/article.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const appRoutes: Routes = [
  { path: 'Exercise1', component: ExerciseOneComponent },
  { path: 'Exercise2', component: ExerciseTwoComponent },
  { path: 'Hello', component: HelloWorldComponent },
  { path: 'Vote', component: VoteDomainComponent },
  { path: 'Products', component: ProductsAllComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent,
    ProductsAllComponent,
    HelloWorldComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    VoteDomainComponent,
    ArticleComponent,
    NavMenuComponent,
  ],
  imports: [BrowserModule,
            FormsModule, 
            RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
