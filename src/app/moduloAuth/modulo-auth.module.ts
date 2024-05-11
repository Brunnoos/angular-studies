import { NgModule } from "@angular/core";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./modulo-auth-routing.module";

@NgModule({
    declarations: [
        OnboardingComponent,
        SignInComponent,
        SignUpComponent,
    ],
    imports: [
        AuthRoutingModule,
    ],
    providers: [],
    bootstrap: []
})
export class AuthModule { }