---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 GETVSIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 GETVSIT{:/}
 tag | {::nomarkdown}GETVSIT{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}DFN<br/>LOC<br/>ADATE{:/}
 Lines | ```
 N VSIT,VSITPKG
 S (VSIT,VSIT("VDT"))=ADATE,VSIT("PAT")=DFN,VSIT("LOC")=LOC
 S VSIT("SVC")="A",VSIT("PRI")="P",VSIT(0)="NMD1",VSITPKG="OR"
 D ^VSIT
 S Y=VSIT("IEN") I +VSIT("IEN")'>0 S Y="" Q
 I +VSIT("LOC") S Y=Y_U_VSIT("LOC")_U_$P(^SC(+VSIT("LOC"),0),U,1,2)```
 Leading comment lines | {::nomarkdown}Return a visit given a patient, location, and date/time{:/}




 Generated on January 13th 2017, 6:55:28 am