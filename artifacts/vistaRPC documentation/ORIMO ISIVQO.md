---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO ISIVQO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO ISIVQO{:/}
 tag | {::nomarkdown}ISIVQO{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is it an IV quick order
 Input Parameters | {::nomarkdown}DLGID{:/}
 Lines | {::nomarkdown} S ORY=0<br/> Q:'$D(^ORD(101.41,DLGID,0))<br/> N IVGRP,DLGTYP,DLGGRP<br/> S IVGRP=$O(^ORD(100.98,"B","IV RX",0))<br/> S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)<br/> S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)<br/> I (DLGTYP="Q"),(DLGGRP=IVGRP) S ORY=1<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am