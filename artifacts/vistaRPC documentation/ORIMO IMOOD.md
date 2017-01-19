---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO IMOOD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO IMOOD{:/}
 tag | {::nomarkdown}IMOOD{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IMOOD^[ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 Method comment | Is it an IMO order?
 Input parameters | {::nomarkdown}ORDERID{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORDERID,0))<br> N PIMO,DGRP,CMGRP,CIGRP<br> S (DGRP,CMGRP,CIGRP,ORY)=0<br> S DGRP=$P($G(^OR(100,+ORDERID,0)),U,11)<br> S CMGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))<br> S CIGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))<br> I DGRP=CMGRP S ORY=1<br> I DGRP=CIGRP S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}