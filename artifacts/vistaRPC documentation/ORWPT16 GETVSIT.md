---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT16 GETVSIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 GETVSIT{:/}
 tag | {::nomarkdown}GETVSIT{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETVSIT^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Return a visit given a patient, location, and date/time{:/}
 Input parameters | {::nomarkdown}DFN<br/>LOC<br/>ADATE{:/}
 Code | ```  N VSIT,VSITPKG
 S (VSIT,VSIT("VDT"))=ADATE,VSIT("PAT")=DFN,VSIT("LOC")=LOC
 S VSIT("SVC")="A",VSIT("PRI")="P",VSIT(0)="NMD1",VSITPKG="OR"
 D ^VSIT
 S Y=VSIT("IEN") I +VSIT("IEN")'>0 S Y="" Q
 I +VSIT("LOC") S Y=Y_U_VSIT("LOC")_U_$P(^SC(+VSIT("LOC"),0),U,1,2)```




 Generated on January 14th 2017, 7:26:35 am