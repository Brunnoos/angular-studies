import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./modulo-home-routing.module";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule {}