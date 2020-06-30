import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductImageComponent } from "./product-image/product-image.component";
import { ProductDepartmentComponent } from "./product-department/product-department.component";
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsAllComponent } from './products-all/products-all.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ArticleComponent } from './article/article.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';

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
    ArticleComponent,
    ExerciseOneComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
