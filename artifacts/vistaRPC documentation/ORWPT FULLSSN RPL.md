---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN RPL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT FULLSSN RPL{:/}
 tag | {::nomarkdown}FSSNRPL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an SSN in the format 999999999(P), return a list of matching patients based on Restricted Patient List.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list matching Full SSN, but from RPL only.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN in the format '999999999(P)'.{:/} | 




 Generated on January 13th 2017, 6:44:47 am