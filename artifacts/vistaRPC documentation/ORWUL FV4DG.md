---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL FV4DG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL FV4DG{:/}
 tag | {::nomarkdown}FV4DG{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return the current full list & item count
 Input Parameters | {::nomarkdown}DGNM{:/}
 Lines | ```{::nomarkdown} S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))<br/> I 'VAL D<br/> . N UPDTIME,ATTEMPT<br/> . S UPDTIME=$G(^ORD(101.43,"AH","S."_DGNM)),ATTEMPT=0<br/> . I UPDTIME="" S UPDTIME=$H,^ORD(101.43,"AH","S."_DGNM)=UPDTIME<br/> . D FVBLD<br/> . S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))<br/> I ($P(^ORD(101.44,+VAL,0),U,6)'=$G(^ORD(101.43,"AH","S."_DGNM))) D<br/> . ; -- see if a task is already queued to rebuild this<br/> . L +^XTMP("ORWDSET "_DGNM):2 E  Q<br/> . N ZTSK S ZTSK=+$G(^XTMP("ORWDSET "_DGNM,"TASK"))<br/> . I ZTSK D ISQED^%ZTLOAD S ZTSK=+ZTSK(0)<br/> . I ZTSK L -^XTMP("ORWDSET "_DGNM) Q<br/> . ; -- create a task to rebuild the list<br/> . D FVBLDQ(DGNM)<br/> . L -^XTMP("ORWDSET "_DGNM)<br/> S $P(VAL,U,2)=$P($G(^ORD(101.44,+VAL,20,0)),U,4)```{:/}




 Generated on January 13th 2017, 7:11:27 am