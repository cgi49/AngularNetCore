import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
//import { WorkoutRunnerModule } from './components/trainer/workout-runner/workout-runner.module';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GuessTheNumberComponent } from './components/guessthenumber/guessthenumber.component';
import { WorkoutRunnerComponent } from './components/trainer/workout-runner/workout-runner.component';
import { ExerciseDescriptionComponent } from './components/trainer/workout-runner/exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './components/trainer/workout-runner/video-player/video-player.component';
import { SecondsToTimePipe } from './components/trainer/workout-runner/seconds-to-time.pipe';
import { Routing } from './app.routes';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HelloWorldComponent,
        WeatherComponent,
        GuessTheNumberComponent,
        WorkoutRunnerComponent,
        ExerciseDescriptionComponent,
        VideoPlayerComponent,
        SecondsToTimePipe
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        //WorkoutRunnerModule,
        Routing,
    ]
})
export class AppModule {
}
