---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU SAVE DCSUMM CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU SAVE DCSUMM CONTEXT{:/}
 tag | {::nomarkdown}SVDCCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SVDCCTX^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Save new DC Summary view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | {::nomarkdown}  N TMP<br> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1)<br> I TMP'="" D  Q<br> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1,ORCTXT)<br> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1,ORCTXT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rDCSumm.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}