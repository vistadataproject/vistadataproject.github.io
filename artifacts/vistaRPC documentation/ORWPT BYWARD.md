---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT BYWARD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT BYWARD{:/}
 tag | {::nomarkdown}BYWARD{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients currently residing on a specified wardlocation.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | BYWARD^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return a list of patients in a ward
 Input parameters | {::nomarkdown}WARD{:/}
 Code | {::nomarkdown}  N ILST,DFN<br> I +$G(WARD)<1 S LST(1)="^No ward identified" Q<br> S (ILST,DFN)=0<br> S WARD=$P(^DIC(42,WARD,0),"^")   ;DBIA #36<br> F  S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0  D<br> . S ILST=ILST+1,LST(ILST)=+DFN_U_$P(^DPT(+DFN,0),U)_U_$G(^DPT(+DFN,.101))<br> I ILST<1 S LST(1)="^No patients found."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}