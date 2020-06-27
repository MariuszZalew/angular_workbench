import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ArticleComponent } from './article/article.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ArticleComponent,
    ExerciseOneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
