---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 RCVORCI 

 property | value 
--- | --- 
 label | ORWDBA1 RCVORCI
 tag | RCVORCI
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | SINGLE VALUE
 description | Receive Order Entry Billing Aware data from CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | Receive order related Clinical Indicators & Diagnoses from GUI
 Leading comment lines | Store data in ^OR(100,ODN,5.1) & ^OR(100,0DN,5.2)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIAG | LIST | 255 | true | Array of Orders and Clinical Indicators returned from CPRS | 




Generated on January 11th 2017, 6:34:23 am