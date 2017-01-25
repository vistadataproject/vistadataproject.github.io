---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns default values and list sets for Allergy ordering dialog.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Get dialog data for allergies
 Code | {::nomarkdown}  N ILST,I,X S ILST=0<br> S LST($$NXT)="~Allergy Types" D ALLGYTYP<br> S LST($$NXT)="~Reactions" D ALLGYTYP<br> S LST($$NXT)="~Nature of Reaction" D NATREACT<br> S LST($$NXT)="~Top Ten" D TOPTEN<br> S LST($$NXT)="~Observ/Hist" D OBSHIST<br> S LST($$NXT)="~Severity" D SEVERITY{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}