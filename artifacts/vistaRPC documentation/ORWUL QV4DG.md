---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QV4DG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QV4DG{:/}
 tag | {::nomarkdown}QV4DG{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return the quick order list, given a display group name
 Input Parameters | {::nomarkdown}DGRP{:/}
 Lines | ```
 N NM
 S VAL="0^0"
 I 'DGRP S DGRP=+$O(^ORD(100.98,"B",DGRP,0))
 S NM=$$GET^XPAR("ALL","ORWDQ QUICK VIEW",DGRP,"I")
 Q:'$L(NM)
 D QV4NM(.VAL,NM)```




 Generated on January 13th 2017, 6:55:29 am