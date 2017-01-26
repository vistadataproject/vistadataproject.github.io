---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETDSSUNIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETDSSUNIT{:/}
 tag | {::nomarkdown}DSSUNT{:/}
 routine | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns array with active and/or inactive DSS units from file 724.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional input variable ECARY containing a status of:   STAT   - Active or inactive DSS Units (optional)            A-ctive (default), I-nactive, B-oth{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}