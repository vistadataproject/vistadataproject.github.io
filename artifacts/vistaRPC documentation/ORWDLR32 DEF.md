---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get lab order dialog definition.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}ALOC, ADIV{:/}
 First comment | {::nomarkdown}<pre> For Event Delay Order<br/>  ALOC: Delay Event's default location<br/>  ADIV: Delay Event's default division<br/> get dialog definition specific to lab</pre>{:/}
 Code | {::nomarkdown}  S ILST=0<br> S LST($$NXT)="~ShortList" D SHORT<br> S LST($$NXT)="~Lab Collection Times" D LCOLLTM<br> S LST($$NXT)="~Ward Collection Times" D WCOLLTM<br> S LST($$NXT)="~Send Patient Times" D SENDTM<br> S LST($$NXT)="~Collection Types" D COLLTYP<br> S LST($$NXT)="~Default Urgency" D URGENCY<br> S LST($$NXT)="~Schedules" D SCHED<br> S LST($$NXT)="~Common" D COMMON{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}