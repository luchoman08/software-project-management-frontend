import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatExpansionModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatDialog,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOption,
  MatListModule,
  MatFormField
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { MainPageComponentsModule } from './page-components/main-components/main-components.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http'

import { ProjectManagersInterfaceModule } from './project-managers/project-managers-interface/project-managers-interface.module';
import {
  SimpleDevelopersService
} from './project-managers/project-managers-interface/services/' ;
import {
  AgmCoreModule
} from '@agm/core';
import { SingleDataDialogEditOrAddComponent } from './page-components/common-components';
import { CommonComponentsModule } from './page-components/common-components/common-components.module';
import { SimpleAssignmentComponent } from './simple-assignment/simple-assignment.component';
import { SimpleSprintsService } from './project-managers/project-managers-interface/services/simple-services/simple-sprints.service';
import { SimpleUserStoryModule } from './user-story/simple-userstory/simple-userstory.module';
import { SimpleDeveloperModule } from './developer/simple-developer/simple-developer.module';

import { SimpleAssignmentService } from './microservices/microservices-interface/story-assignment-interface/services';
import {
  StoryAssignmentInterfaceModule
} from './microservices/microservices-interface/story-assignment-interface/story-assignment-interface.module';

import {
  AssignmentMiroservicesInterfaceService
} from './microservices/microservices-interface/story-assignment-interface/services/story-assignment-microservices-interface.services';
import {
  SimpleAssignmentDetailReadOnlyComponent
} from './simple-assignment/simple-assignment-detail-read-only/simple-assignment-detail-read-only.component';
import { ProjectsService } from './core/services/projects.service';
import { SprintsService } from './core/services/sprints.service';
import { UserStoriesService } from './core/services';
import { DevelopersService } from './core/services/developers-service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MainPageComponentsModule,
    MatExpansionModule,
    RouterModule,
    CoreModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatListModule,
    LoadingBarModule.forRoot(),
    AppRoutingModule,
    CommonComponentsModule,
    SimpleUserStoryModule,
    SimpleDeveloperModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ProjectManagersInterfaceModule,
    StoryAssignmentInterfaceModule
  ],
  declarations: [
    AppComponent,
    SimpleAssignmentComponent,
    SimpleAssignmentDetailReadOnlyComponent
  ],
  providers: [
    UserStoriesService,
    ProjectsService,
    SprintsService,
    DevelopersService,
    SimpleAssignmentService,
    AssignmentMiroservicesInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
