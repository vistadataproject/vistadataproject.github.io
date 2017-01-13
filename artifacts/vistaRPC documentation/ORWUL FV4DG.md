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
 Lines | ```
 S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))
 I 'VAL D
 . N UPDTIME,ATTEMPT
 . S UPDTIME=$G(^ORD(101.43,"AH","S."_DGNM)),ATTEMPT=0
 . I UPDTIME="" S UPDTIME=$H,^ORD(101.43,"AH","S."_DGNM)=UPDTIME
 . D FVBLD
 . S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))
 I ($P(^ORD(101.44,+VAL,0),U,6)'=$G(^ORD(101.43,"AH","S."_DGNM))) D
 . ; -- see if a task is already queued to rebuild this
 . L +^XTMP("ORWDSET "_DGNM):2 E  Q
 . N ZTSK S ZTSK=+$G(^XTMP("ORWDSET "_DGNM,"TASK"))
 . I ZTSK D ISQED^%ZTLOAD S ZTSK=+ZTSK(0)
 . I ZTSK L -^XTMP("ORWDSET "_DGNM) Q
 . ; -- create a task to rebuild the list
 . D FVBLDQ(DGNM)
 . L -^XTMP("ORWDSET "_DGNM)
 S $P(VAL,U,2)=$P($G(^ORD(101.44,+VAL,20,0)),U,4)```




 Generated on January 13th 2017, 6:55:29 am