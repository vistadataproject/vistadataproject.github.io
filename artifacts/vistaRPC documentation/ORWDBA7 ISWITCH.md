---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA7 ISWITCH 

 property | value 
--- | --- 
 label | ORWDBA7 ISWITCH
 tag | ISWITCH
 routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 return value type | SINGLE VALUE
 description | CIDC RPCRETURNS 1 IF PATIENT HAS BILLABLE INSURANCERETURNS 0 IF PATIENT DOES NOT HAVE BILLABLE INSURANCE


### Method description

 property | value 
--- | --- 
 Method comment | Return 0 if don't ask (no ins) or 1 to ask CIDC quest (yes ins)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 14 | true | PATIENT'S IEN | 




 ###### Generated on January 11th 2017, 6:39:43 am