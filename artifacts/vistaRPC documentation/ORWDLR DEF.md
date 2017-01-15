---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a lab order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}get dialog definition specific to lab{:/}
 Input parameters | {::nomarkdown}ALOC{:/}
 Code | {::nomarkdown}  S ILST=0<br> S LST($$NXT)="~Collection Times" D COLLTM<br> S LST($$NXT)="~Send Patient Times" D SENDTM<br> S LST($$NXT)="~Default Urgency="_$$DEFURG^LR7OR3<br> S LST($$NXT)="~Schedules" D SCHED<br> S LST($$NXT)="~Common" D COMMON{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}