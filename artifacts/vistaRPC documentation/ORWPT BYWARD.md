---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT BYWARD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT BYWARD{:/}
 tag | {::nomarkdown}BYWARD{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients currently residing on a specified wardlocation.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a list of patients in a ward
 Input Parameters | {::nomarkdown}WARD{:/}
 Lines | ```
 N ILST,DFN
 I +$G(WARD)<1 S LST(1)="^No ward identified" Q
 S (ILST,DFN)=0
 S WARD=$P(^DIC(42,WARD,0),"^")   ;DBIA #36
 F  S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0  D
 . S ILST=ILST+1,LST(ILST)=+DFN_U_$P(^DPT(+DFN,0),U)_U_$G(^DPT(+DFN,.101))
 I ILST<1 S LST(1)="^No patients found."```




 Generated on January 13th 2017, 6:55:29 am