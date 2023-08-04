import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:  '[appDropdown]'
})
export class DropdownDirective {
    //to dinamically attach or detach css class depending on this
    @HostBinding('class.open') isOpen = false;
    @HostListener ('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}