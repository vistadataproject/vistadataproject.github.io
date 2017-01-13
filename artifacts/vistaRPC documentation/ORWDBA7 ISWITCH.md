---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA7 ISWITCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA7 ISWITCH{:/}
 tag | {::nomarkdown}ISWITCH{:/}
 routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}CIDC RPCRETURNS 1 IF PATIENT HAS BILLABLE INSURANCERETURNS 0 IF PATIENT DOES NOT HAVE BILLABLE INSURANCE{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return 0 if don't ask (no ins) or 1 to ask CIDC quest (yes ins)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT'S IEN{:/} | 




 Generated on January 13th 2017, 6:44:47 am