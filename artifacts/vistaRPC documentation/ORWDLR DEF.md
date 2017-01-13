---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR DEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a lab order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ALOC{:/}
 Lines | {::nomarkdown} S ILST=0<br/> S LST($$NXT)="~Collection Times" D COLLTM<br/> S LST($$NXT)="~Send Patient Times" D SENDTM<br/> S LST($$NXT)="~Default Urgency="_$$DEFURG^LR7OR3<br/> S LST($$NXT)="~Schedules" D SCHED<br/> S LST($$NXT)="~Common" D COMMON{:/}
 Leading comment lines | {::nomarkdown}get dialog definition specific to lab{:/}




 Generated on January 13th 2017, 7:15:27 am