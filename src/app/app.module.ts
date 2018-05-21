import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';


import { AppRoutingModule } from './app.routing';
import { MainPageComponentsModule } from './page-components/main-components/main-components.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http'


import {
  AgmCoreModule
} from '@agm/core';
import { SingleDataDialogEditOrAddComponent } from './page-components/common-components';
import { CommonComponentsModule } from './page-components/common-components/common-components.module';

import {
  AssignmentDetailReadOnlyComponent
} from './assignment/assignment-detail-read-only/assignment-detail-read-only.component';
import { ProjectsService } from './core/services/projects.service';
import { SprintsService } from './core/services/sprints.service';
import { UserStoriesService } from './core/services';
import { DevelopersService } from './core/services/developers-service';
import { UserStoryModule } from './user-story/user-story.module';
import { DeveloperModule } from './developer/developer.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    MainPageComponentsModule,
    RouterModule,
    CoreModule,
    LoadingBarModule.forRoot(),
    AppRoutingModule,
    CommonComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    UserStoriesService,
    ProjectsService,
    SprintsService,
    DevelopersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
