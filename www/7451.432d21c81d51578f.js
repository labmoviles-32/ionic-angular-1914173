"use strict";(self.webpackChunkionic_angular=self.webpackChunkionic_angular||[]).push([[7451],{7451:(p,c,e)=>{e.r(c),e.d(c,{createSwipeBackGesture:()=>E});var h=e(206),_=e(1363);e(2733);const E=(a,g,D,M,m)=>{const r=a.ownerDocument.defaultView;return(0,_.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&g(),onStart:D,onMove:t=>{M(t.deltaX/r.innerWidth)},onEnd:t=>{const s=r.innerWidth,n=t.deltaX/s,o=t.velocityX,l=o>=0&&(o>.2||t.deltaX>s/2),u=(l?1-n:n)*s;let d=0;if(u>5){const O=u/Math.abs(o);d=Math.min(O,540)}m(l,n<=0?.01:(0,h.k)(0,n,.9999),d)}})}}}]);