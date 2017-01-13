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
 Lines | ```{::nomarkdown} K TEXT<br/> S IEN=+$G(IEN) I IEN<1 Q<br/> S TEXT(1)=$P($G(^ORD(100.9,IEN,0)),U)<br/> S TEXT(2)=""<br/> S TEXT(3)=$P($G(^ORD(100.9,IEN,4)),U)<br/> S TEXT(4)=""<br/>```{:/}




 Generated on January 13th 2017, 7:11:27 am