---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU SAVE TIU CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU SAVE TIU CONTEXT{:/}
 tag | {::nomarkdown}SVTIUCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SVTIUCTX^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Save new Notes view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | {::nomarkdown}  N TMP<br> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1)<br> I TMP'="" D  Q<br> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1,ORCTXT)<br> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1,ORCTXT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}