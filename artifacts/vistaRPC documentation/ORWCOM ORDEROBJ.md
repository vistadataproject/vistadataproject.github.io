---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM ORDEROBJ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM ORDEROBJ{:/}
 tag | {::nomarkdown}ORDEROBJ{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns COM Objects for order accept{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Accept Order COM Object
 Input Parameters | {::nomarkdown}ORGRP{:/}
 Lines | ```
 D GETOBJ(.ORY,"ORWCOM ORDER ACCEPTED",ORGRP)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORGRP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Display Group IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am