import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatDialog,
  MatFormFieldModule,
  MatSelectModule,
  MatOption,
  MatFormField
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { MainPageComponentsModule } from './page-components/main-components/main-components.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectManagersInterfaceModule } from './project-managers/project-managers-interface/project-managers-interface.module';
import {
  SimpleUserStoriesService,
  SimpleProjectsService,
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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MainPageComponentsModule,
    RouterModule,
    CoreModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    AppRoutingModule,
    CommonComponentsModule,
    SimpleUserStoryModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ProjectManagersInterfaceModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleAssignmentComponent
  ],
  providers: [
    SimpleUserStoriesService,
    SimpleProjectsService,
    SimpleSprintsService,
    SimpleDevelopersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
