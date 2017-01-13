---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 SCLST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 SCLST{:/}
 tag | {::nomarkdown}SCLST{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of Order ID's and SC.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC for compiling appropriate TxF's

 Leading comment lines | {::nomarkdown}RPC titled ORWDBA1 SCLST
Y       =    Returned value
DFN     =    Patient IEN
ORLST   =    List of orders
call for BA/TF{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN.{:/} | 
| {::nomarkdown}ORLST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Orders.{:/} | 




 Generated on January 13th 2017, 6:15:57 am