---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS DIVISION GET 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS DIVISION GET{:/}
 tag | {::nomarkdown}DIVGET{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return a list of divisions of a user.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Get Division data
 Leading comment lines | IEN is userid (DUZ or username) for future use.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If passed this will be the user to get the division info on.{:/} | 




 Generated on January 13th 2017, 5:52:13 am