---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET LAB TYPE 

 property | value 
--- | --- 
 label | DSIR GET LAB TYPE
 tag | GTLABTYP
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | This routine returns the type of lab requested for a given request.  Note that if no lab has been requested, this will contain a null or a zero.  In either case, this will be treated as a Cumulative Labs type.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI = REQUEST IEN | 




Generated on January 11th 2017, 6:34:23 am