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
 Lines | ```
 Q:'$D(^OR(100,+ORDERID,0))
 N PIMO,DGRP,CMGRP,CIGRP
 S (DGRP,CMGRP,CIGRP,ORY)=0
 S DGRP=$P($G(^OR(100,+ORDERID,0)),U,11)
 S CMGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))
 S CIGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))
 I DGRP=CMGRP S ORY=1
 I DGRP=CIGRP S ORY=1```




 Generated on January 13th 2017, 6:55:29 am