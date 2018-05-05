// import { InjectionToken } from '@angular/core';
//
// declare const InstallTrigger: any;
// const isFirefoxCheck = typeof InstallTrigger !== 'undefined';
// export const IS_FIREFOX = new InjectionToken<boolean>('is browser Firefox');
// export const isFirefoxProvider = { provide: IS_FIREFOX, useValue: isFirefoxCheck };
export const isMobile = window && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
