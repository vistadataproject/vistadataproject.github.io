---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 DEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get lab order dialog definition.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ALOC<br/>ADIV{:/}
 Lines | ```
 S ILST=0
 S LST($$NXT)="~ShortList" D SHORT
 S LST($$NXT)="~Lab Collection Times" D LCOLLTM
 S LST($$NXT)="~Ward Collection Times" D WCOLLTM
 S LST($$NXT)="~Send Patient Times" D SENDTM
 S LST($$NXT)="~Collection Types" D COLLTYP
 S LST($$NXT)="~Default Urgency" D URGENCY
 S LST($$NXT)="~Schedules" D SCHED
 S LST($$NXT)="~Common" D COMMON```
 Leading comment lines | {::nomarkdown}For Event Delay Order<br/>ALOC: Delay Event's default location<br/>ADIV: Delay Event's default division<br/>get dialog definition specific to lab{:/}




 Generated on January 13th 2017, 6:55:29 am