import { ThemesService } from './src/app/themes.service';
export class ThemeSetter {

    set(service: ThemesService): string {
        let theme = '';
        service.theme.subscribe((receivedTheme: string) => {
            service.currentTheme = receivedTheme;
            theme = receivedTheme;
        });
        return theme;
    }


}
