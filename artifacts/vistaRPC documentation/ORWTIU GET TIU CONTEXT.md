---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU GET TIU CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET TIU CONTEXT{:/}
 tag | {::nomarkdown}GTTIUCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns current Notes view context for user
 Input Parameters | {::nomarkdown}ORUSER{:/}
 Lines | ```{::nomarkdown} N OCCLIM,SHOWSUB<br/> S Y=$$GET^XPAR("ALL","ORCH CONTEXT NOTES",1)<br/> I +$P(Y,";",5)=0 D<br/> . S OCCLIM=$P($$PERSPRF^TIULE(DUZ),U,10)<br/> . S:+OCCLIM>0 $P(Y,";",5)=OCCLIM<br/> S SHOWSUB=$P(Y,";",6)<br/> S $P(Y,";",6)=$S(SHOWSUB'="":SHOWSUB,1:0)```{:/}




 Generated on January 13th 2017, 7:11:27 am