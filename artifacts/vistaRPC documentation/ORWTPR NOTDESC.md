---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPR NOTDESC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPR NOTDESC{:/}
 tag | {::nomarkdown}NOTDESC{:/}
 routine | [ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | from RPC
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 K TEXT
 S IEN=+$G(IEN) I IEN<1 Q
 S TEXT(1)=$P($G(^ORD(100.9,IEN,0)),U)
 S TEXT(2)=""
 S TEXT(3)=$P($G(^ORD(100.9,IEN,4)),U)
 S TEXT(4)=""
```




 Generated on January 13th 2017, 6:55:29 am