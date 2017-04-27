import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GuessTheNumberComponent } from './components/guessthenumber/guessthenumber.component';
//import { WorkoutRunnerModule } from './components/trainer/workout-runner/workout-runner.module';
import { WorkoutRunnerComponent } from './components/trainer/workout-runner/workout-runner.component';
import { ExerciseDescriptionComponent } from './components/trainer/workout-runner/exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './components/trainer/workout-runner/video-player/video-player.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:
        HomeComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'fetch-data',
        component: FetchDataComponent
    },
    {
        path: 'hello',
        component: HelloWorldComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    },
    {
        path: 'guessthenumber',
        component: GuessTheNumberComponent
    },
    {
        path: 'workoutrunner',
        component: WorkoutRunnerComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);