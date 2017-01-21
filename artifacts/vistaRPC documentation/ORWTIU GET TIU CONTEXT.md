---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU GET TIU CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET TIU CONTEXT{:/}
 tag | {::nomarkdown}GTTIUCTX{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GTTIUCTX^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Returns current Notes view context for user
 Input parameters | {::nomarkdown}ORUSER{:/}
 Code | {::nomarkdown}  N OCCLIM,SHOWSUB<br> S Y=$$GET^XPAR("ALL","ORCH CONTEXT NOTES",1)<br> I +$P(Y,";",5)=0 D<br> . S OCCLIM=$P($$PERSPRF^TIULE(DUZ),U,10)<br> . S:+OCCLIM>0 $P(Y,";",5)=OCCLIM<br> S SHOWSUB=$P(Y,";",6)<br> S $P(Y,";",6)=$S(SHOWSUB'="":SHOWSUB,1:0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}