---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWLRR INFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR INFO{:/}
 tag | {::nomarkdown}INFO{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return lab test description information.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | INFO^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Get Lab test description info
 Input parameters | {::nomarkdown}ORTEST{:/}
 Code | ```  I '$L($T(ONE^LR7OR4)) S ORY(1)="Missing lab API (part of patch LR*5.2*256)" Q
 D ONE^LR7OR4(.ORY,.ORTEST)```




 Generated on January 14th 2017, 7:26:35 am