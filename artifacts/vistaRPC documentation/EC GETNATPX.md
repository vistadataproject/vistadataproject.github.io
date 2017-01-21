---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETNATPX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETNATPX{:/}
 tag | {::nomarkdown}ECNATPX{:/}
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of active, inactive or both of Event Capture national and local Procedures from file #725.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Input variable ECARY contains the following subscripted elements   ECPX - Procedures to output, L- local, N- National, B- Both   STAT - Active or inactive EC Nat Codes          A-ctive (default), I-nactive, B-othIf not valued is passed in defaults to Local and Active.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}