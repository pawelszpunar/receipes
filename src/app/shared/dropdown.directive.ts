import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    
    @HostBinding('class.open') isClicked: boolean = false;
    
    @HostListener('document:click', ['$event']) onCLick(event: Event) {
        this.isClicked = this.elementReference.nativeElement.contains(event.target) ? !this.isClicked : false;
    }

    constructor(private elementReference: ElementRef) {}
}