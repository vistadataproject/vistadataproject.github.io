---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTIU SAVE TIU CONTEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU SAVE TIU CONTEXT{:/}
 tag | {::nomarkdown}SVTIUCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SVTIUCTX^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Save new Notes view preferences for user
 Input parameters | {::nomarkdown}ORCTXT{:/}
 Code | ```  N TMP
 S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1)
 I TMP'="" D  Q
 . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1,ORCTXT)
 D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT NOTES",1,ORCTXT)```




 Generated on January 14th 2017, 7:26:35 am