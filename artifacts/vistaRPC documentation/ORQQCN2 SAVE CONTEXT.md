---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN2 SAVE CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN2 SAVE CONTEXT{:/}
 tag | {::nomarkdown}SAVECTXT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save new view preferences for user
 Input Parameters | {::nomarkdown}ORCTXT{:/}
 Lines | {::nomarkdown} N TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT)<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT){:/}




 Generated on January 13th 2017, 7:15:27 am