import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http'


import { ProjectsService } from './core/services/projects.service';
import { SprintsService } from './core/services/sprints.service';
import { UserStoriesService } from './core/services';
import { DevelopersService } from './core/services/developers-service';
import { MaterialModule } from './material.module';
import { AssignmentService } from './core/services/assginment.service';
import { PunctuationsModule } from './punctuations/punctuations.module';
import { DeveloperModule } from './developer/developer.module';
import { AssignmentModule } from './assignment/assignment.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    CoreModule,
    SharedModule,
    PunctuationsModule,
    DeveloperModule,
    AssignmentModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  declarations: [
    /**
     * Dev component
     */
    // DeveloperCompatibilityWithUserStoryComponent,
     /** End of dev component */
    AppComponent
  ],
  providers: [
    UserStoriesService,
    ProjectsService,
    SprintsService,
    AssignmentService,
    DevelopersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
