---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE MHTESTOK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MHTESTOK{:/}
 tag | {::nomarkdown}MHTESTOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if all supporing code is in place for Mental Health Tests.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns True if all supporting MH Test APIs exist
 Lines | ```
 D GAFOK(.ORY)
 I +ORY,+$G(DUZ),$T(SAVEIT^YTAPI1)'="",$T(PREVIEW^YTAPI4)'="",$T(SHOWALL^YTAPI3)'="",$T(LISTONE^YTAPI)'="",$T(MHS^PXRMRPCC)'="",$T(MHR^PXRMRPCC)'="",$T(MH^PXRMRPCC)'="" D
 . N SRV
 . S SRV=$P($G(^VA(200,DUZ,5)),U)
 . S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","PXRM MENTAL HEALTH ACTIVE",1,"Q")
 . I +ORY S ORY=1```




 Generated on January 13th 2017, 6:55:29 am