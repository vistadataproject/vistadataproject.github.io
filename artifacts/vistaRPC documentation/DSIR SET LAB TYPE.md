---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR SET LAB TYPE 

 property | value 
--- | --- 
 label | DSIR SET LAB TYPE
 tag | STLABTYP
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | Routine for setting the requested lab type for a given request.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI = REQUEST IEN | 
| vs:Input_Parameter-8994_02 | TYP | LITERAL | 2 | true | INPUT PARAMETER    TYP = SELECTED LAB TYPE - A NUMERIC VALUE >= 0 | 