import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MainFormComponent } from './main-form/main-form.component';
import { DemoFormComponent } from './main-form/demo-form/demo-form.component';
import { GroupFormComponent } from './main-form/group-form/group-form.component';
import { StringReverseFormComponent } from './main-form/string-reverse-form/string-reverse-form.component';
import { MaxCharFormComponent } from './main-form/max-char-form/max-char-form.component';
import { IntReverseFormComponent } from './main-form/int-reverse-form/int-reverse-form.component';

const appRoutes: Routes = [
  { path: 'Exercise1', component: ExerciseOneComponent },
  { path: 'Exercise2', component: ExerciseTwoComponent },
  { path: 'Hello', component: HelloWorldComponent },
  { path: 'Vote', component: VoteDomainComponent },
  { path: 'Products', component: ProductsAllComponent },
  { path: 'TestForm', component: MainFormComponent }
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
    MainFormComponent,
    DemoFormComponent,
    GroupFormComponent,
    StringReverseFormComponent,
    MaxCharFormComponent,
    IntReverseFormComponent
  ],
  imports: [BrowserModule,
            FormsModule, 
            ReactiveFormsModule,
            RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
