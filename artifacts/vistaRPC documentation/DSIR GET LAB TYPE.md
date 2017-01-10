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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI = REQUEST IEN | 