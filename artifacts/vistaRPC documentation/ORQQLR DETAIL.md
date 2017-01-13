---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQLR DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a lab order.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return lab results for an order

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from Patient File [#2]{:/} | 
| {::nomarkdown}ORDER NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}OE/RR order number from the Orders file [#100].{:/} | 




 Generated on January 13th 2017, 5:52:13 am