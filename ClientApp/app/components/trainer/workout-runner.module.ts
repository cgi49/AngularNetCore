import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';
@NgModule({
    imports: [
        UniversalModule,
        FormsModule
    ],
    declarations: [
        WorkoutRunnerComponent
    ],
    exports: [
        WorkoutRunnerComponent
    ]
})
export class WorkoutRunnerModule { }