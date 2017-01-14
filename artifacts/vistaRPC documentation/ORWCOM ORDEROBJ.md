---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWCOM ORDEROBJ 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM ORDEROBJ{:/}
 tag | {::nomarkdown}ORDEROBJ{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns COM Objects for order accept{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORGRP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Display Group IEN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ORDEROBJ^[ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 Method comment | Returns Accept Order COM Object
 Input parameters | {::nomarkdown}ORGRP{:/}
 Code | ```  D GETOBJ(.ORY,"ORWCOM ORDER ACCEPTED",ORGRP)```




 Generated on January 14th 2017, 7:26:35 am