---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWSR SAVE SURG CONTEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SAVE SURG CONTEXT{:/}
 tag | {::nomarkdown}SVSURCTX{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SVSURCTX^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Save new Notes view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | ```  N TMP
 S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1)
 I TMP'="" D  Q
 . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)
 D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)```




 Generated on January 14th 2017, 7:26:35 am