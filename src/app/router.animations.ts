/*import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
} */

// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
 
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        //    backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),
 
        // route 'enter' transition
        transition('void => *', [
 
            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                top: '-1000%',
 
                // start with background opacity set to 0 (invisible)
  //              backgroundColor: 'rgba(0, 0, 0, 1)'
            }),
 
            // animation and styles at end of transition
            animate('0.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                top: '0%',
 
                // transition the background opacity to 0.8 to fade it in
//                backgroundColor: 'rgba(0, 0, 0, 1)'
            }))
        ]),
 
        // route 'leave' transition
        transition('* => void', [
            // animation and styles at end of transition
            animate('0.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                top: '-100%',
 
                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 1)'
            }))
        ])
    ]);

export const fade =  trigger('fade', [
      state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#FFF'
        })),
        transition('void => *', [
            style({opacity: 0, backgroundColor: '#FFF'}),
            animate('.7s ease-in-out', style({opacity: 1}))
        ]),
        transition('* => void', [
            style({opacity: 1, backgroundColor: '#FFF'}),
            animate('.4s ease-in-out', style({opacity: 0})),
        
        ])
    ]);



export const slideToTop =  trigger('slideToTop', [
      state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),
        transition('void => *', [
            style({
                top: 0

            }),
            animate('.7s ease-in-out', style({
                top: '-50%'
            }))
        ]),
        transition('* => void', [
            style({

            }),
            animate('.4s ease-in-out', style({

            }))
        ])
    ]);