---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ONE VISIT NOTE? 

 property | value 
--- | --- 
 label | TIU ONE VISIT NOTE?
 tag | TIUVISIT
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | Boolean RPC to evaulate if note has a corresponding visit.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDOC | LITERAL |  | true | This is the TIU document type. | 
| TIUDFN | LITERAL |  | true | This is the patient's internal entry number (DFN). | 
| TIUVISIT | LITERAL |  | true | This is the patient's visit internal entry number. | 