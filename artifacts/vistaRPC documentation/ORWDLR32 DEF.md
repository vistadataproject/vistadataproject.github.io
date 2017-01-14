---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR32 DEF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get lab order dialog definition.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}For Event Delay Order<br/>ALOC: Delay Event's default location<br/>ADIV: Delay Event's default division<br/>get dialog definition specific to lab{:/}
 Input parameters | {::nomarkdown}ALOC<br/>ADIV{:/}
 Code | ```  S ILST=0<br/> S LST($$NXT)="~ShortList" D SHORT<br/> S LST($$NXT)="~Lab Collection Times" D LCOLLTM<br/> S LST($$NXT)="~Ward Collection Times" D WCOLLTM<br/> S LST($$NXT)="~Send Patient Times" D SENDTM<br/> S LST($$NXT)="~Collection Types" D COLLTYP<br/> S LST($$NXT)="~Default Urgency" D URGENCY<br/> S LST($$NXT)="~Schedules" D SCHED<br/> S LST($$NXT)="~Common" D COMMON```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}