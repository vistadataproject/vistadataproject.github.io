---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET ADDRESSES 

 property | value 
--- | --- 
 label | DSIR GET ADDRESSES
 tag | GTADDLST
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC gets all address know by the RELEASE OF INFORMATION - DSSI for a given patient or requestor.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT REQUESTOR | LITERAL |  | true | RQSTR - Pointer to Patient or Requestor  examples:    \3;DSIR(19620.96,\    \41;DSIR(19620.12,\    \441;DPT(\ | 




Generated on January 11th 2017, 6:34:23 am