---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR SAVE SURG CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SAVE SURG CONTEXT{:/}
 tag | {::nomarkdown}SVSURCTX{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SVSURCTX^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Save new Notes view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | {::nomarkdown}  N TMP<br> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1)<br> I TMP'="" D  Q<br> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)<br> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}