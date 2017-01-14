---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXM3 ISUDQO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM3 ISUDQO{:/}
 tag | {::nomarkdown}ISUDQO{:/}
 routine | [ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISUDQO^[ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
 Method comment | True: is unit dose quick order
 Input parameters | {::nomarkdown}DLGID{:/}
 Code | ```  S ORY=0
 Q:'$D(^ORD(101.41,DLGID,0))
 N CLODGRP,CLIVDGRP,UDGRP1,UDGRP2,DLGTYP,DLGGRP
 S UDGRP1=$O(^ORD(100.98,"B","UD RX",0))
 S UDGRP2=$O(^ORD(100.98,"B","I RX",0))
 S CLODGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))
 S CLIVDGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))
 S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)
 S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)
 I (DLGTYP="Q"),((DLGGRP=UDGRP1)!(DLGGRP=UDGRP2)!(DLGGRP=CLODGRP)!(DLGGRP=CLIVDGRP)) S ORY=1
```




 Generated on January 14th 2017, 7:26:36 am