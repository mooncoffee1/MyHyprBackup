"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2054],{74269:(e,n,t)=>{t.d(n,{x:()=>U});var a=t(71523);const r="playback-bar",l="playback-bar__progress-time-elapsed",o="gglUjikTBtMzCZFgSmpS",i="dN6OLjjcmnuleiECu55A",c="DSdahCi0SDG37V9ZmsGO",s="playback-progressbar-container";var u=t(30758),d=t(97500),p=t.n(d),v=t(94822),b=t(7852),f=t(65277),g=t(99),h=t(84904),m=t(90292),k=t(81001),y=t(73413),x=t(41527);const w="main-playbackBarRemainingTime-container";var O=t(86070),j=function(e){var n=e.position,t=e.duration,r=e.isPreview,l=e.semanticColor,o=void 0===l?"textSubdued":l,i=e.isFullscreenMode,c=void 0!==i&&i,s=e.className,d=(0,y.x)(k.fC,!1),v=(0,a.A)(d,2),f=v[0],g=v[1],h=(0,u.useCallback)((function(){r||g(!f)}),[f,g,r]);return(0,O.jsx)(b.E,{as:"div","data-testid":"playback-duration","data-test-position":n,variant:c?"bodyMedium":"marginal",className:p()(w,s),onClick:h,semanticColor:o,children:f?"-".concat((0,x.f)(t-n)):(0,x.f)(t)})},S=t(22507),C=(t(78551),t(34518),t(47994),t(2823),t(65594),t(4630)),D=t(18621),R=t(19533);const A="Bn7RYdPUyzN4qo1bC1Ic",N="OEe8k2xe6o6x9x0FAc4b";var P=[{name:"Anakin",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"7px","--core-color":"white","--edge-glow-color":"rgb(55, 132, 214)","--blur-glow-color":"#2e77d0","--blur-radius":"16px","--spread-radius":"8px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_anakin.png"),")"),"--saber-hilt-overlap":"5px"}},{name:"Luke",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(135, 220, 90)","--blur-glow-color":"#1ed760","--blur-radius":"16px","--spread-radius":"4px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_luke.png"),")"),"--saber-hilt-overlap":"5px"}},{name:"Vader",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"10px","--core-color":"white","--edge-glow-color":"rgb(229, 17, 21)","--blur-glow-color":"#cd1a2b","--blur-radius":"20px","--spread-radius":"14px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_vader.png"),")"),"--saber-hilt-overlap":"6px"}},{name:"Rey",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"8px","--core-color":"white","--edge-glow-color":"rgb(249, 164, 11)","--blur-glow-color":"rgb(253, 175, 33)","--blur-radius":"20px","--spread-radius":"5px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_rey.png"),")"),"--saber-hilt-overlap":"3px"}},{name:"Leia",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(55, 132, 214)","--blur-glow-color":"#2e77d0","--blur-radius":"16px","--spread-radius":"8px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_leia.png"),")"),"--saber-hilt-overlap":"2px"}},{name:"Mace",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(90, 22, 167)","--blur-glow-color":"rgb(172, 57, 193)","--blur-radius":"20px","--spread-radius":"8px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_mace.png"),")"),"--saber-hilt-overlap":"1px"}},{name:"Ahsoka",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"6px","--core-color":"white","--edge-glow-color":"rgb(255,255,255)","--blur-glow-color":"rgb(255,255,255)","--blur-radius":"20px","--spread-radius":"5px","--saber-hilt-url":"url(".concat((0,C.b)("images/sw_saber_ahsoka1.png"),")"),"--saber-hilt-overlap":"-9px","--saber-hilt-width":"100px","--saber-hilt-height":"36px"}}],E=["spotify:playlist:37i9dQZF1DXaUaRhCgtpCo","spotify:playlist:69BOXIItwwyxTgdz6flzvU","spotify:playlist:37i9dQZF1DWUgUvAPAFxdh"],_=["official_star_wars","kirbysayshi","hansencc"],z=/Star Wars/i,M="THX1138",H=M.length;function V(e){var n,t,r,l,o,i,c,s,d=e.onChange,p=function(e){var n=(0,u.useState)(0),t=(0,a.A)(n,2),r=t[0],l=t[1];return{next:function(){l((r+1)%P.length)},config:e?P[r]:null}}((n=(0,u.useState)([]),t=(0,a.A)(n,2),r=t[0],l=t[1],o=(0,u.useState)(!1),i=(0,a.A)(o,2),c=i[0],s=i[1],(0,u.useEffect)((function(){var e=function(e){for(r.push(e.key);r.length>H;)r.shift();r.join("")===M&&s(!c),l((0,S.A)(r))};return window.addEventListener("keypress",e),function(){window.removeEventListener("keypress",e)}}),[r,c]),(0,D.o)((function(e){var n,t,a,r,l=null!==(n=null==e?void 0:e.context.uri)&&void 0!==n?n:"",o=null!==(t=null==e||null===(a=e.context)||void 0===a||null===(a=a.metadata)||void 0===a?void 0:a.context_owner)&&void 0!==t?t:"",i=null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0;return!!E.includes(l)||!!_.includes(o)||!!(0,R.v)(i)&&(z.test(i.name)||z.test(i.album.name))}))||c)),v=p.next,b=p.config,f=(0,u.useRef)(d);return f.current=d,(0,u.useEffect)((function(){var e;f.current(null!==(e=null==b?void 0:b.vars)&&void 0!==e?e:null)}),[b]),b?(0,O.jsx)("div",{className:A,children:(0,O.jsx)("button",{"data-testid":"saber-hilt-button","aria-label":g.Ru.get("playback-control.a11y.lightsaber-hilt-button",null==b?void 0:b.name),className:N,style:b.vars,onClick:v})}):null}var T=["spotify:playlist:37i9dQZF1DXc3KPAjGyPdm"];var B=t(33786),W=t(49093),I=t(64654),L=t(38547),F=t(92742),X=1e3,U=function(e){var n,t,d,k,y,w=e.isPreview,S=e.isFullscreenMode,C=void 0!==S&&S,R=e.timerPlacement,A=void 0===R?"inline":R,N=e.onChange,P=e.onDragStart,E=e.onDragEnd,_=(0,f.NC)(W.O14),z=(0,u.useState)(null),M=(0,a.A)(z,2),H=M[0],U=M[1],Z=(0,B.W)(),q=(0,I.z)(),Y=(0,D.o)((function(e){return e}),(function(e,n){var t,a;return(null==e?void 0:e.duration)===(null==n?void 0:n.duration)&&(null==e?void 0:e.hasContext)===(null==n?void 0:n.hasContext)&&(null==e||null===(t=e.restrictions)||void 0===t?void 0:t.canSeek)===(null==n||null===(a=n.restrictions)||void 0===a?void 0:a.canSeek)})),Q=(0,F.p)(),G=Q.seekBackward,K=Q.seekForward,$=Q.seekOffsetMs,J=null!==(n=null==Y?void 0:Y.duration)&&void 0!==n?n:0,ee=null!==(t=null==Y?void 0:Y.hasContext)&&void 0!==t&&t,ne=null!==(d=null==Y||null===(k=Y.restrictions)||void 0===k?void 0:k.canSeek)&&void 0!==d&&d,te=(0,L.S)(X),ae=(0,a.A)(te,3),re=ae[0],le=ae[1],oe=ae[2],ie=(0,u.useState)(null),ce=(0,a.A)(ie,2),se=ce[0],ue=ce[1],de=null!==se?se:re,pe=null!==se?se:re+(_&&!oe?X:0),ve=function(e){ue(e*J),null==P||P()},be=(de>0||J>0)&&"true"!==(null==Y||null===(y=Y.item)||void 0===y||null===(y=y.metadata)||void 0===y?void 0:y.is_narration),fe=(0,x.f)(be?de:NaN),ge=(0,x.f)(be?J:NaN),he=(0,v.d4)((function(e){var n;return!(null==e||null===(n=e.ui)||void 0===n||null===(n=n.fullscreenMode)||void 0===n||!n.isOpen)})),me=(0,D.o)((function(e){var n,t=null!==(n=null==e?void 0:e.context.uri)&&void 0!==n?n:"";return T.includes(t)})),ke=(0,m.O)();if(C!==he)return null;var ye="above"===A?i:o;return(0,O.jsxs)("div",{className:p()(r,ye),children:[(0,O.jsx)(b.E,{"data-testid":"playback-position",as:"div",variant:C?"bodyMedium":"marginal",className:l,semanticColor:C?"textBase":"textSubdued",children:fe}),(0,O.jsxs)("div",{className:s,children:[ee?(0,O.jsx)(V,{onChange:function(e){U(e)}}):null,(0,O.jsx)(h.z2,{labelText:g.Ru.get("playback-control.a11y.seek-slider-button"),value:pe,updateFrequency:X,offFrequencyUpdate:oe,max:J,step:$,"aria-valuetext":g.Ru.get("download.progress-global",fe,ge),isInteractive:ee&&be,onDragStart:ve,onDragMove:ve,onDragEnd:function(e,n){var t=n.wasDraggedBeforeReleased;if(ue(null),Z({intent:"seek",type:"click"}),null==E||E(),ne){var a=e*J;le(a),q.seekTo(a),null==N||N(a,t?"drag":"hit")}},onStepBackward:function(){if(ne){var e=G();le(Math.max(0,Math.min(J,re-e)))}},onStepForward:function(){if(ne){var e=K();le(Math.max(0,Math.min(J,re+e)))}},saberConfig:H,isPlayingStrangerThings:me,isAttackOnTitanEasterEggActive:ke,"data-testid":"playback-progressbar",enableAnimation:_})]}),(0,O.jsx)(j,{position:de,duration:be?J:NaN,isPreview:w,semanticColor:C?"textBase":"textSubdued",isFullscreenMode:C,className:c})]})}},85467:(e,n,t)=>{t.d(n,{x:()=>f});var a=t(15057),r=t(36734),l=t(70019),o=t(45355),i=t(99),c=t(98538),s=t(48120),u=t(33786),d=t(64654),p=t(18621),v=t(38618),b=t(86070),f=function(e){var n=e.iconSize,t=void 0===n?"small":n,f=e.onClick,g=e.className,h=e.showDelayOnHover,m=(0,d.z)(),k=(0,u.W)(),y=(0,p.o)((function(e){return{hasContext:null==e?void 0:e.hasContext,isPaused:null==e?void 0:e.isPaused,canPause:null==e?void 0:e.restrictions.canPause,canResume:null==e?void 0:e.restrictions.canResume}}),v.a),x=y.hasContext,w=y.isPaused,O=y.canPause,j=y.canResume,S=(0,a.YQ)((function(e){k({type:"click",intent:w?"play":"pause"}),w&&j?(null==f||f("resume"),m.resume(),(0,s.aX)(e,"play/resume")):!w&&O&&(null==f||f("pause"),m.pause())}),100,{leading:!0,trailing:!1}),C=w?i.Ru.get("playback-control.play"):i.Ru.get("playback-control.pause"),D=!x||(w?!j:!O);return(0,b.jsx)(c.Zp,{label:C,showDelay:h,children:(0,b.jsx)(r.$,{iconOnly:w?l.A:o._,className:g,size:{small:"small",medium:"medium",large:"large"}[t]||"small",disabled:D,"aria-label":C,"data-testid":"control-button-playpause",onClick:S,colorSet:"invertedLight"})})}},56309:(e,n,t)=>{t.d(n,{s:()=>y});var a=t(71523),r=t(51488),l=(t(13661),t(97500)),o=t.n(l),i=t(84701),c=t(90707),s=t(97120),u=t(99),d=t(98538),p=t(33786),v=t(83742),b=t(18621),f=t(35949);const g="vW9NFcNIj8useE43Vx9G";var h=t(86070);function m(e,n,t){return n&&t?(e+1)%3:n?(e+1)%2:t?1===e?2:(e+2)%4:f.p.REPEAT_NONE}var k=(0,r.A)((0,r.A)((0,r.A)({},f.p.REPEAT_NONE,{get label(){return u.Ru.get("playback-control.disable-repeat")},intent:"repeat-off",ariaChecked:"false"}),f.p.REPEAT_CONTEXT,{get label(){return u.Ru.get("playback-control.enable-repeat")},intent:"repeat-all",ariaChecked:"true"}),f.p.REPEAT_TRACK,{get label(){return u.Ru.get("playback-control.enable-repeat-one")},intent:"repeat-single",ariaChecked:"mixed"}),y=function(e){var n=e.onClick,t=e.className,l=e.showDelayOnHover,u=(0,p.W)(),y=(0,v.V)(),x=y.setRepeat,w=y.repeat,O=(0,b.o)((function(e){var n,t;return[null!==(n=null==e?void 0:e.restrictions.canToggleRepeatContext)&&void 0!==n&&n,null!==(t=null==e?void 0:e.restrictions.canToggleRepeatTrack)&&void 0!==t&&t]})),j=(0,a.A)(O,2),S=j[0],C=j[1],D=!S&&!C,R=k[m(w,S,C)].label,A=w!==f.p.REPEAT_NONE;return(0,h.jsx)(d.Zp,{label:R,showDelay:l,children:(0,h.jsx)(i.H,{className:o()((0,r.A)({},g,A),t),iconOnly:w===f.p.REPEAT_TRACK?c.I:s.B,size:"small",disabled:D,"aria-label":R,"data-testid":"control-button-repeat",onClick:function(){var e=m(w,S,C);u({type:"click",intent:k[e].intent}),null==n||n(e),x(e)},role:"checkbox","aria-checked":k[w].ariaChecked,semanticColor:A?"textBrightAccent":void 0})})}},91325:(e,n,t)=>{t.d(n,{h:()=>d});var a=t(84701),r=t(67247),l=t(99),o=t(98538),i=t(33786),c=t(64654),s=t(18621),u=t(86070),d=function(e){var n=e.onClick,t=e.className,d=e.showDelayOnHover,p=(0,i.W)(),v=(0,c.z)(),b=(0,s.o)((function(e){var n;return null!==(n=null==e?void 0:e.restrictions.canSeek)&&void 0!==n&&n}));return(0,u.jsx)(o.Zp,{label:l.Ru.get("playback-control.skip-backward-15"),showDelay:d,children:(0,u.jsx)(a.H,{iconOnly:r.e,size:"small",onClick:function(){p({type:"click",intent:"skip-back-15"}),null==n||n(-15e3),v.seekBackward(15e3)},disabled:!b,"aria-label":l.Ru.get("playback-control.skip-backward-15"),"data-testid":"control-button-seek-back-15",className:t})})}},90895:(e,n,t)=>{t.d(n,{v:()=>d});var a=t(84701),r=t(17999),l=t(99),o=t(98538),i=t(33786),c=t(64654),s=t(18621),u=t(86070),d=function(e){var n=e.onClick,t=e.className,d=e.showDelayOnHover,p=(0,i.W)(),v=(0,c.z)(),b=(0,s.o)((function(e){var n;return null!==(n=null==e?void 0:e.restrictions.canSeek)&&void 0!==n&&n}));return(0,u.jsx)(o.Zp,{label:l.Ru.get("playback-control.skip-forward-15"),showDelay:d,children:(0,u.jsx)(a.H,{iconOnly:r.A,size:"small",onClick:function(){p({type:"click",intent:"skip-forward-15"}),null==n||n(15e3),v.seekForward(15e3)},disabled:!b,"aria-label":l.Ru.get("playback-control.skip-forward-15"),"data-testid":"control-button-seek-forward-15",className:t})})}},93313:(e,n,t)=>{t.d(n,{u:()=>b});var a=t(51488),r=t(97500),l=t.n(r),o=t(84701),i=t(66942),c=t(99),s=t(98538),u=t(33786),d=t(83742);const p="fZjbVIqD8Xc3auRZOxu5";var v=t(86070),b=function(e){var n=e.onClick,t=e.className,r=e.showDelayOnHover,b=(0,u.W)(),f=(0,d.V)(),g=f.shuffle,h=f.setShuffle,m=f.canToggleShuffle,k=g?c.Ru.get("playback-control.disable-shuffle"):c.Ru.get("playback-control.enable-shuffle");return(0,v.jsx)(s.Zp,{label:k,showDelay:r,children:(0,v.jsx)(o.H,{className:l()((0,a.A)({},p,g),t),iconOnly:i.p,size:"small",onClick:function(){var e=!g;b({type:"click",intent:"shuffle"}),null==n||n(e),h(e)},disabled:!m,role:"switch","aria-checked":g?"true":"false","aria-label":k,"data-testid":"control-button-shuffle",semanticColor:g?"textBrightAccent":void 0})})}},23527:(e,n,t)=>{t.d(n,{d:()=>v});var a=t(15057),r=t(84701),l=t(17693),o=t(99),i=t(98538),c=t(48120),s=t(33786),u=t(64654),d=t(18621),p=t(86070),v=function(e){var n=e.onClick,t=e.className,v=e.showDelayOnHover,b=(0,u.z)(),f=(0,s.W)(),g=(0,d.o)((function(e){var n;return null!==(n=(null==e?void 0:e.restrictions.canSkipPrevious)||(null==e?void 0:e.restrictions.canSeek))&&void 0!==n&&n})),h=(0,a.YQ)((function(e){f({type:"click",intent:"previous"}),null==n||n(),b.skipToPrevious(),(0,c.aX)(e,"skip-back")}),100,{leading:!0,trailing:!1});return(0,p.jsx)(i.Zp,{label:o.Ru.get("playback-control.skip-back"),showDelay:v,children:(0,p.jsx)(r.H,{iconOnly:l.A,size:"small",disabled:!g,"aria-label":o.Ru.get("playback-control.skip-back"),"data-testid":"control-button-skip-back",onClick:h,className:t})})}},53499:(e,n,t)=>{t.d(n,{$:()=>v});var a=t(15057),r=t(84701),l=t(70365),o=t(99),i=t(98538),c=t(48120),s=t(33786),u=t(64654),d=t(18621),p=t(86070),v=function(e){var n=e.onClick,t=e.className,v=e.showDelayOnHover,b=(0,u.z)(),f=(0,s.W)(),g=(0,d.o)((function(e){var n;return null!==(n=null==e?void 0:e.restrictions.canSkipNext)&&void 0!==n?n:null})),h=(0,a.YQ)((function(e){f({type:"click",intent:"next"}),null==n||n(),b.skipToNext(),(0,c.aX)(e,"skip-forward")}),100,{leading:!0,trailing:!1});return(0,p.jsx)(i.Zp,{label:o.Ru.get("playback-control.skip-forward"),showDelay:v,children:(0,p.jsx)(r.H,{iconOnly:l.s,size:"small",disabled:!g,"aria-label":o.Ru.get("playback-control.skip-forward"),"data-testid":"control-button-skip-forward",onClick:h,className:t})})}},71353:(e,n,t)=>{t.d(n,{w:()=>le});var a=t(51488),r=t(65277),l=t(99),o=t(48824),i=t(98538),c=t(85280),s=t(69437),u=t(70410),d=t(84823),p=t(66700),v=t(49574),b=t(45011),f=t(37029),g=t(88485),h=t(84348),m=t(52935),k=t(90614),y=t(70217),x=t(63280),w=t(57883),O=t(13015),j=t(98194),S=t(49139),C=t(22600),D=t(99849),R=t(77430),A=t(59764),N=t(10556),P=t(3661),E=t(62714),_=t(94892),z=t(4897),M=t(49268),H=t(35423),V=t(10154),T=t(26909);const B="INvB6IvAqjjvyfm0ezDi";var W=t(86070),I={.5:c.D4,.6:s.k,.7:u.l,.8:d.W9,.9:p.l,1:v.P,1.1:b.g,1.2:f.Dx,1.3:g.A,1.4:h.l,1.5:m.in,1.6:k.h,1.7:y.e,1.8:x.B,1.9:w.T,2:O.c,2.1:j.F,2.2:S.W,2.3:C.Z,2.4:D.U,2.5:R.X,2.6:A.m,2.7:N.n,2.8:P.Y,2.9:E.X,3:_.f,3.1:z.y,3.2:M.T,3.3:H.Q,3.4:V.l,3.5:T.i},L=function(e){var n=e.speed,t=e.iconSize,a=void 0===t?20:t,r=I[n];return r?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(r,{className:B,iconSize:a,style:{width:"".concat(a,"px"),height:"".concat(a,"px")}}),(0,W.jsx)("span",{className:"hidden-visually",children:"".concat(n,"x")})]}):(0,W.jsx)("span",{children:"".concat(n,"x")})},F=(t(25550),t(15342),t(30758)),X=t(56818),U=t(36178),Z=t(46400),q=t(71523),Y=(t(70750),t(47710),[.5,.6,.7,.8,.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5]),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=Y.slice().sort((function(n,t){return Math.abs(n-e)-Math.abs(t-e)}));return(0,q.A)(n,1)[0]},G=t(33786);const K="Is0ZfXiIyRoHd9y1OWtv";var $=function(e){var n=e.selectedSpeed,t=e.setSelectedSpeed,a=(0,G.W)(),r=Y,o=(0,F.useRef)(null),i=(0,F.useCallback)((function(e){null!==e&&(o.current=e)}),[]);return(0,F.useEffect)((function(){null!=o&&o.current&&o.current.scrollIntoView({block:"center"})}),[o]),(0,W.jsxs)(X.W,{getInitialFocusElement:function(e){return null==e?void 0:e.querySelector('[aria-checked="true"]')},children:[(0,W.jsx)(U.y,{children:l.Ru.get("playback-control.playback-speed")}),(0,W.jsx)("div",{className:K,children:r.map((function(e){return(0,W.jsx)(Z.D,{elementRef:e===n?i:void 0,onClick:function(){t(e),a({type:"click",intent:"choose-speed",itemIdSuffix:"option-".concat(e,"x")})},"data-testid":"playback-speed-option-".concat(e),role:"menuitemradio","aria-label":l.Ru.get("playback-control.playback-speed-button-a11y",e),"aria-checked":e===n,children:"".concat(e,"x")},e)}))})]})},J=t(73413),ee=t(83742),ne=t(35489);var te=t(76293),ae=t(41349);const re="Ww5ppB6W74laf1c0H_pR";var le=function(e){var n=e.iconSize,t=void 0===n?20:n,c=e.onClick,s=function(){var e=(0,r.NC)(ne.hd),n=(0,ee.V)(),t=n.speed,a=n.setSpeed,l=n.canChangeSpeed,o=(0,J.x)("playbackSpeed",1),i=(0,q.A)(o,2),c=i[0],s=i[1],u=(0,F.useMemo)((function(){return Q(null!=c?c:Y)}),[c]),d=(0,F.useMemo)((function(){return Boolean(t)?Q(t):u}),[t,u]),p=(0,F.useCallback)((function(e){s(e),a(e)}),[s,a]);return{speed:e===ne._9.ESPERANTO?d:u,setSpeed:p,canChangeSpeed:l}}(),u=s.speed,d=s.setSpeed,p=s.canChangeSpeed,v=(0,G.W)(),b=(0,te.v)((function(e){return e.connectionStatus===ae.zP.NOT_CONNECTED})),f=(0,r.NC)(ne.hd),g=(0,a.A)({},"--button-size","".concat(2*t,"px"));return p?(0,W.jsx)(o.t,{renderInline:!0,placement:"top-start",menu:(0,W.jsx)($,{selectedSpeed:u,setSelectedSpeed:function(e){null==c||c(e),d(e)}}),children:function(e,n,a){return(0,W.jsx)(i.Zp,{label:l.Ru.get("playback-control.change-playback-speed"),children:(0,W.jsx)("button",{style:g,ref:a,className:re,onClick:function(e){n(e),v({type:"click",intent:"choose-speed"})},"aria-label":l.Ru.get("playback-control.change-playback-speed"),"data-testid":"control-button-playback-speed",disabled:!b&&f===ne._9.DEFAULT,children:(0,W.jsx)(L,{speed:u,iconSize:t})})})}}):null}},40121:(e,n,t)=>{t.d(n,{M:()=>I,V:()=>W});t(7651),t(30456),t(26701),t(37417),t(11737),t(51691),t(702),t(5672),t(43379),t(34192),t(88856),t(51565),t(18316);var a=t(51488),r=t(71523),l=t(30758),o=t(97500),i=t.n(o),c=t(15057),s=t(99),u=t(98538),d=t(84904),p=t(48),v=t(25988),b=t(28868),f=t(72834),g=t(12747),h=t(86070),m=["volume","iconSize"];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.volume,t=void 0===n?1:n,a=e.iconSize,r=y({size:void 0===a?"small":a,role:"presentation"},(0,p.A)(e,m));return 0===t?(0,h.jsx)(v.X,y({"aria-label":s.Ru.get("playback-control.a11y.volume-off")},r)):t<1/3?(0,h.jsx)(b.D,y({"aria-label":s.Ru.get("playback-control.a11y.volume-low")},r)):t<2/3?(0,h.jsx)(f.z,y({"aria-label":s.Ru.get("playback-control.a11y.volume-medium")},r)):(0,h.jsx)(g.C,y({"aria-label":s.Ru.get("playback-control.a11y.volume-high")},r))},w=t(5904),O=t(64501),j=t.n(O),S=t(51096),C=t(14910),D=t(5254);var R=t(15196);const A="volume-bar",N="RyUTmsGCr7jM4YTwqq8p",P="HGaOzijxBrKrSQhwI6rT",E="volume-bar__slider-container",_="DLZvnBAg9muHrwjSyIus",z="ekolz0hXwCXtCyFNmvqb",M="volume-bar__icon-button",H="aDDQP2meKLCk46Bn7Zz1",V="XRpLYcl6xtWmk7bNdHkS";function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W=function(e){return e[e.SHOW_SLIDER_ALWAYS=0]="SHOW_SLIDER_ALWAYS",e[e.SHOW_SLIDER_ON_HOVER=1]="SHOW_SLIDER_ON_HOVER",e}({}),I=function(e){var n=e.iconSize,t=void 0===n?"small":n,o=e.onVolumeBarClick,p=e.onVolumeBarDrag,v=e.onToggleMuteClick,b=e.className,f=e.mode,g=void 0===f?W.SHOW_SLIDER_ALWAYS:f,m=e.sliderSize,k=e.sliderDirection,y=void 0===k?"horizontal":k,O=e.volumeIconRef,T=e.isMiniPlayer,I=e.showDelayOnHover,L=function(){var e=(0,C.p)(),n=(0,l.useState)(-1),t=(0,r.A)(n,2),a=t[0],o=t[1];return(0,l.useEffect)((function(){var n=!0,t=function(){var t=(0,w.A)(j().mark((function t(){var a;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getVolume();case 2:a=t.sent,n&&o(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){n=!1}}),[e]),(0,D.F)(S._.VOLUME,(function(e){return o(e.data.volume)})),{volume:a,setVolume:(0,l.useCallback)((function(n){o(n),e.setVolume(n)}),[e]),raiseVolume:(0,l.useCallback)((function(){return e.raiseVolume()}),[e]),lowerVolume:(0,l.useCallback)((function(){return e.lowerVolume()}),[e])}}(),F=L.volume,X=L.setVolume,U=L.raiseVolume,Z=L.lowerVolume,q=-1!==F,Y=Math.min(1,Math.max(0,F)),Q=(0,l.useState)({isDragging:!1,isHoveringButton:!1,toggleVolumeLevel:null,dragPosition:0,shouldDragValueBeUsed:!1}),G=(0,r.A)(Q,2),K=G[0],$=G[1],J=K.shouldDragValueBeUsed,ee=K.dragPosition,ne=K.isHoveringButton,te=K.toggleVolumeLevel,ae=K.isDragging,re=J?ee:Y;q||(re=1);var le=(0,c.YQ)((function(e){var n=Math.min(1,Math.max(0,e));X(n)}),25,{maxWait:50,leading:!0}),oe=function(){$((function(e){return B(B({},e),{},{isHoveringButton:!0})}))},ie=function(){$((function(e){return B(B({},e),{},{isHoveringButton:!1})}))},ce=0===F?s.Ru.get("playback-control.unmute"):s.Ru.get("playback-control.mute"),se=(0,a.A)((0,a.A)({},"--button-size","".concat(2*(0,R.k)(t),"px")),"--slider-width",m?"".concat(m,"px"):"100%");return(0,h.jsxs)("div",{style:se,className:i()(A,b,(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},H,!q),N,"vertical"===y),_,g===W.SHOW_SLIDER_ON_HOVER),P,T)),"data-testid":"volume-bar",dir:"ltr",onWheel:function(e){var n;if(q){var t=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX,a=Math.max(-120,Math.min(120,(null==e||null===(n=e.nativeEvent)||void 0===n?void 0:n.wheelDelta)||t))/1200,r=Math.max(0,Math.min(1,re+a));X(r)}},ref:O,children:[(0,h.jsx)(u.Zp,{label:ce,showDelay:I,children:(0,h.jsx)("button",{className:i()(M,"control-button",(0,a.A)({},V,T)),onClick:function(){0===re?(null==v||v("not_muted"),le(null!=te?te:.7)):($((function(e){return B(B({},e),{},{toggleVolumeLevel:re})})),null==v||v("muted"),le(0))},disabled:!q,"aria-label":0===F?s.Ru.get("playback-control.unmute"):s.Ru.get("playback-control.mute"),onMouseEnter:oe,onMouseLeave:ie,"aria-describedby":"volume-icon","data-testid":"volume-bar-toggle-mute-button",children:(0,h.jsx)(x,{id:"volume-icon",iconSize:t,volume:re})})}),(0,h.jsx)("div",{className:i()(E,(0,a.A)({},z,"vertical"===y)),onMouseEnter:oe,onMouseLeave:ie,children:(0,h.jsx)(d.z2,{labelText:s.Ru.get("playback-control.a11y.volume-slider-button"),value:re,max:1,step:.1,onDragStart:function(e){$((function(n){return B(B({},n),{},{isDragging:!0,dragPosition:e,shouldDragValueBeUsed:!0})}))},onDragMove:function(e){$((function(n){return B(B({},n),{},{dragPosition:e,shouldDragValueBeUsed:!0})})),ae&&(null==p||p(e),le(e))},onDragEnd:function(e){$((function(e){return B(B({},e),{},{shouldDragValueBeUsed:!1,dragPosition:0,isDragging:!1})})),null==o||o(e),le(e)},onStepBackward:Z,onStepForward:U,forceActiveStyles:ne,direction:y})})]})}},25077:(e,n,t)=>{t.d(n,{w:()=>u});t(7651),t(30456),t(26701),t(37417),t(11737),t(51691),t(702),t(5672),t(43379),t(34192),t(88856),t(51565),t(18316);var a=t(51488),r=t(30758),l=t(47060),o=t(86070);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){var n=e.renderDisabled,t=void 0===n?function(){return null}:n,a=e.renderEnabled;return(0,l.XR)(!0)?a():t()},u=function(e){return(0,o.jsx)(r.Suspense,{fallback:null,children:(0,o.jsx)(s,c({},e))})}},52742:(e,n,t)=>{t.d(n,{a:()=>u});var a=t(66942),r=t(93810),l=t(82898),o=t(83742),i=t(18621),c=t(41314),s=t(86070),u=function(e){var n=e.size,t=e.withSnackbar,u=e.className,d=e.showDelayOnHover,p=(0,i.o)((function(e){return null==e?void 0:e.context}),(function(e,n){return(null==e?void 0:e.uri)===(null==n?void 0:n.uri)})),v=(0,l.g)(!0).title,b=(0,o.V)().canToggleShuffle;return(0,c.O)(p)?(0,s.jsx)(r.Y,{size:n,contextUri:p.uri,entityName:null!=v?v:"",isActive:!0,activationPlacement:"top",offsetDotDistance:!1,withPadding:!0,disabled:!b,withActivation:!1,withSnackbar:t,className:u,showDelayOnHover:d}):(0,s.jsx)(r.u,{size:n,shuffleModeConfig:{icon:a.p},shuffleIsOn:!1,disabled:!0,withPadding:!0,className:u,showDelayOnHover:d})}},82898:(e,n,t)=>{t.d(n,{g:()=>v});t(30456),t(34518),t(47994),t(43379),t(34192),t(88856);var a=t(94822),r=t(2860),l=t(99),o=t(98782),i=t(3497),c=t(73309),s=t(2398),u=t(18621),d=t(24777),p=function(e){var n,t;return null!==(n=null===(t=(0,r.o_h)(e))||void 0===t?void 0:t.toURLPath(!0))&&void 0!==n?n:""},v=function(e){var n,t,r,v,b,f=(0,a.d4)(c.Ht).user,g=(0,u.o)((function(e){return{item:null==e?void 0:e.item,context:null==e?void 0:e.context}}),(function(e,n){var t,a,r,l;return(null===(t=e.item)||void 0===t?void 0:t.uri)===(null===(a=n.item)||void 0===a?void 0:a.uri)&&(null===(r=e.context)||void 0===r||null===(r=r.metadata)||void 0===r?void 0:r.context_description)===(null===(l=n.context)||void 0===l||null===(l=l.metadata)||void 0===l?void 0:l.context_description)})),h=g.item,m=g.context;if(!h||!m)return{title:null,link:null};var k=(0,i.Iu)();if(m.uri===k.uri||m.uri===s.bV)return{title:k.name,link:p(s.bV)};if((0,d.N)(h)&&!e)return{title:l.Ru.get("ad-formats.advertisement"),link:null};if("queue"===h.provider&&!e)return{title:l.Ru.get("playback-control.queue"),link:p("spotify:app:queue")};var y=(0,i.$R)(null==f?void 0:f.id);if(m.uri===(null==y?void 0:y.uri))return{title:null==y?void 0:y.name,link:p(null==y?void 0:y.uri)};var x,w,O=(0,i.n5)(null==f?void 0:f.id);return m.uri===(null==O?void 0:O.uri)?{title:null==O?void 0:O.name,link:p(null==O?void 0:O.uri)}:(0,o.HS)(m)?{title:[null===(x=h.metadata)||void 0===x?void 0:x.station_title,null===(w=h.metadata)||void 0===w?void 0:w.station_subtitle].filter(Boolean).join(" • "),link:null}:{title:null!==(n=null!==(t=null===(r=m.metadata)||void 0===r?void 0:r.context_description)&&void 0!==t?t:null==h?void 0:h.name)&&void 0!==n?n:"",link:null!==(v=null!==(b=p(m.uri))&&void 0!==b?b:p(h.uri))&&void 0!==v?v:""}}},5254:(e,n,t)=>{t.d(n,{F:()=>l});var a=t(30758),r=t(14910);function l(e,n){var t=(0,a.useRef)(n),l=(0,r.p)();t.current=n,(0,a.useEffect)((function(){return l.getEvents().addListener(e,(function(e){t.current(e)}))}),[e,l])}}}]);
//# sourceMappingURL=2054.js.map