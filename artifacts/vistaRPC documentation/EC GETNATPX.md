---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETNATPX 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETNATPX{:/}
 tag | {::nomarkdown}ECNATPX{:/}
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of active, inactive or both of Event Capture national and local Procedures from file #725.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Input variable ECARY contains the following subscripted elements   ECPX - Procedures to output, L- local, N- National, B- Both   STAT - Active or inactive EC Nat Codes          A-ctive (default), I-nactive, B-othIf not valued is passed in defaults to Local and Active.{:/} | 




 Generated on January 13th 2017, 6:44:47 am