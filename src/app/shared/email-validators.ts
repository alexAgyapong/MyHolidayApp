import { AbstractControl } from "@angular/forms";

export class EmailValidators {
    static emailMatch(c: AbstractControl): { [key: string]: boolean } | null {
        const emailControl = c.get('email');
        const confirmEmailControl = c.get('confirmEmail');
        if (emailControl.pristine || confirmEmailControl.pristine) {
            return null;
        }
        if (emailControl.value === confirmEmailControl.value) {
            return null;
        }
        return { 'match': true };
    }
}
