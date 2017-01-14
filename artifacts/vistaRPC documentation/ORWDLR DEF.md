---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR DEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a lab order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}get dialog definition specific to lab{:/}
 Input parameters | {::nomarkdown}ALOC{:/}
 Code | ```  S ILST=0
 S LST($$NXT)="~Collection Times" D COLLTM
 S LST($$NXT)="~Send Patient Times" D SENDTM
 S LST($$NXT)="~Default Urgency="_$$DEFURG^LR7OR3
 S LST($$NXT)="~Schedules" D SCHED
 S LST($$NXT)="~Common" D COMMON```




 Generated on January 14th 2017, 7:26:35 am