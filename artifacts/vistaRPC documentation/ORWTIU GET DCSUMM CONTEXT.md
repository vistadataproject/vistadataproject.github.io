---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTIU GET DCSUMM CONTEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET DCSUMM CONTEXT{:/}
 tag | {::nomarkdown}GTDCCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GTDCCTX^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Returns current DC Summary view context for user
 Input parameters | {::nomarkdown}ORUSER{:/}
 Code | ```  N OCCLIM,SHOWSUB
 S Y=$$GET^XPAR("ALL","ORCH CONTEXT SUMMRIES",1)
 I +$P(Y,";",5)=0 D
 . S OCCLIM=$P($$PERSPRF^TIULE(DUZ),U,10)
 . S:+OCCLIM>0 $P(Y,";",5)=OCCLIM
 S SHOWSUB=$P(Y,";",6)
 S $P(Y,";",6)=$S(SHOWSUB'="":SHOWSUB,1:0)```




 Generated on January 14th 2017, 7:26:35 am