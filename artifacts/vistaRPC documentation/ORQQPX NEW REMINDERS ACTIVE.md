---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW REMINDERS ACTIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW REMINDERS ACTIVE{:/}
 tag | {::nomarkdown}NEWACTIV{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if Interactive Reminders are active, otherwise return 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return true if Interactive Reminders are active
 Lines | ```
 S ORY=0
 I $T(APPL^PXRMRPCA)'="",+$G(DUZ) D
 . N SRV
 . ;S SRV=$P($G(^VA(200,DUZ,5)),U)
 . S SRV=$$GET1^DIQ(200,DUZ,29,"I")
 . S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","PXRM GUI REMINDERS ACTIVE",1,"Q")
 . I +ORY S ORY=1
 . E  S ORY=0```




 Generated on January 13th 2017, 6:55:29 am