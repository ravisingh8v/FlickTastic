import { Injectable } from '@angular/core';
import { Overlay,OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

@Injectable()
export class OverlayService {
public overlayRef!:OverlayRef;
  constructor(private overlay: Overlay) {

  }
  openDialogue<T>(component:ComponentType<T>) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: "overlay-backdrop",
      panelClass: "overlay-panel",
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
    const portal=new ComponentPortal(component);
    const componentRef=this.overlayRef.attach(portal);
    this.overlayRef.backdropClick().subscribe(()=>{
      this.overlayRef.detach()
    })
    return componentRef;
  }
}
