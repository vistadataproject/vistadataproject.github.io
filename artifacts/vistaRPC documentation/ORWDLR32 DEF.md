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
 Lines | ```{::nomarkdown} S ILST=0<br/> S LST($$NXT)="~ShortList" D SHORT<br/> S LST($$NXT)="~Lab Collection Times" D LCOLLTM<br/> S LST($$NXT)="~Ward Collection Times" D WCOLLTM<br/> S LST($$NXT)="~Send Patient Times" D SENDTM<br/> S LST($$NXT)="~Collection Types" D COLLTYP<br/> S LST($$NXT)="~Default Urgency" D URGENCY<br/> S LST($$NXT)="~Schedules" D SCHED<br/> S LST($$NXT)="~Common" D COMMON```{:/}
 Leading comment lines | {::nomarkdown}For Event Delay Order<br/>ALOC: Delay Event's default location<br/>ADIV: Delay Event's default division<br/>get dialog definition specific to lab{:/}




 Generated on January 13th 2017, 7:11:26 am