import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
  
@NgModule({
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD15Rk4MStHprTchiZY4Negd6j0e8-gtNg'
        })
    ],
    providers: [
        MapService
    ]
})
export class MapModule {

}