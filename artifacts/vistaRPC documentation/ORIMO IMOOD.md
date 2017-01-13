---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO IMOOD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO IMOOD{:/}
 tag | {::nomarkdown}IMOOD{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is it an IMO order?
 Input Parameters | {::nomarkdown}ORDERID{:/}
 Lines | {::nomarkdown} Q:'$D(^OR(100,+ORDERID,0))<br/> N PIMO,DGRP,CMGRP,CIGRP<br/> S (DGRP,CMGRP,CIGRP,ORY)=0<br/> S DGRP=$P($G(^OR(100,+ORDERID,0)),U,11)<br/> S CMGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))<br/> S CIGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))<br/> I DGRP=CMGRP S ORY=1<br/> I DGRP=CIGRP S ORY=1{:/}




 Generated on January 13th 2017, 7:15:28 am