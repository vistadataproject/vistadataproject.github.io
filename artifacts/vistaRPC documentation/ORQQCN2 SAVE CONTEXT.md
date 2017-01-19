---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN2 SAVE CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN2 SAVE CONTEXT{:/}
 tag | {::nomarkdown}SAVECTXT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVECTXT^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Save new view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | {::nomarkdown}  N TMP<br> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1)<br> I TMP'="" D  Q<br> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT)<br> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT){:/}


### CPRS

[Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}