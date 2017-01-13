---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWNSS VALSCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS VALSCH{:/}
 tag | {::nomarkdown}VALSCH{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Validate a schedule for IM order
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 S ORY=0
 Q:'$D(^OR(100,+ORID,0))
 N IPGRP,ORGRP,DGRP,LOC,AIPM  ;*327,362 - Add IV, clinic display groups
 S LOC=+$P($G(^OR(100,+ORID,0)),U,10),AIPM=$D(^SC("AE",1,LOC))
 S DGRP=$S($G(AIPM):"C RX",$G(^OR(100,+ORID,4))["V":"IV RX",1:"UD RX")
 S IPGRP=$O(^ORD(100.98,"B",DGRP,0))
 S ORGRP=$P($G(^OR(100,+ORID,0)),U,11)
 I ORGRP'=IPGRP S ORY=1 Q
 N SCH,IDX,SCHVAL S (SCH,SCHVAL)=""
 I $D(^OR(100,+ORID,4.5,"ID","SCHEDULE")) S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))
 I SCH="" S ORY=1 Q
 S IDX=0 F  S IDX=$O(^OR(100,+ORID,4.5,SCH,IDX)) Q:'IDX  D
 . S SCHVAL=$G(^OR(100,+ORID,4.5,SCH,IDX))
 . Q:'$L(SCHVAL)
 . D VALSCH^ORWDPS33(.ORY,SCHVAL,"I")
 . I ORY=0 Q```




 Generated on January 13th 2017, 6:55:29 am