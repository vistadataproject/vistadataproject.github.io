---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 GETVSIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 GETVSIT{:/}
 tag | {::nomarkdown}GETVSIT{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETVSIT^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Return a visit given a patient, location, and date/time{:/}
 Input parameters | {::nomarkdown}DFN<br>LOC<br>ADATE{:/}
 Code | {::nomarkdown}  N VSIT,VSITPKG<br> S (VSIT,VSIT("VDT"))=ADATE,VSIT("PAT")=DFN,VSIT("LOC")=LOC<br> S VSIT("SVC")="A",VSIT("PRI")="P",VSIT(0)="NMD1",VSITPKG="OR"<br> D ^VSIT<br> S Y=VSIT("IEN") I +VSIT("IEN")'>0 S Y="" Q<br> I +VSIT("LOC") S Y=Y_U_VSIT("LOC")_U_$P(^SC(+VSIT("LOC"),0),U,1,2){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}