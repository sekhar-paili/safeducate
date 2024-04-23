import { Provider } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


export const COMMON_COMPONENTS: Provider[] = [  
    HeaderComponent,
    FooterComponent
];