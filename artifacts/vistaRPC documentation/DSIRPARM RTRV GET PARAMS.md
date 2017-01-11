---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM RTRV GET PARAMS 

 property | value 
--- | --- 
 label | DSIRPARM RTRV GET PARAMS
 tag | RTRV
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | GLOBAL ARRAY
 description | This is the RPC that will retrieve the ROI parameters from file #19620.701 DSIR FACILITY PARAMETERS File.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INST | LITERAL | 99 | true | Pointer to the DSIR FACILITY PARAMETERS File (#19620.701) same as INSTITUTION File (#4). | 