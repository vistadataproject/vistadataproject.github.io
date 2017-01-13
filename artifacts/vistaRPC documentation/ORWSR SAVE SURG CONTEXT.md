---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR SAVE SURG CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SAVE SURG CONTEXT{:/}
 tag | {::nomarkdown}SVSURCTX{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save new Notes view preferences for user
 Input Parameters | {::nomarkdown}ORCTXT{:/}
 Lines | ```{::nomarkdown} N TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)```{:/}




 Generated on January 13th 2017, 7:11:27 am