---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWNSS VALSCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS VALSCH{:/}
 tag | {::nomarkdown}VALSCH{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALSCH^[ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 Method comment | Validate a schedule for IM order
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^OR(100,+ORID,0))<br> N IPGRP,ORGRP,DGRP,LOC,AIPM  ;*327,362 - Add IV, clinic display groups<br> S LOC=+$P($G(^OR(100,+ORID,0)),U,10),AIPM=$D(^SC("AE",1,LOC))<br> S DGRP=$S($G(AIPM):"C RX",$G(^OR(100,+ORID,4))["V":"IV RX",1:"UD RX")<br> S IPGRP=$O(^ORD(100.98,"B",DGRP,0))<br> S ORGRP=$P($G(^OR(100,+ORID,0)),U,11)<br> I ORGRP'=IPGRP S ORY=1 Q<br> N SCH,IDX,SCHVAL S (SCH,SCHVAL)=""<br> I $D(^OR(100,+ORID,4.5,"ID","SCHEDULE")) S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))<br> I SCH="" S ORY=1 Q<br> S IDX=0 F  S IDX=$O(^OR(100,+ORID,4.5,SCH,IDX)) Q:'IDX  D<br> . S SCHVAL=$G(^OR(100,+ORID,4.5,SCH,IDX))<br> . Q:'$L(SCHVAL)<br> . D VALSCH^ORWDPS33(.ORY,SCHVAL,"I")<br> . I ORY=0 Q{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}