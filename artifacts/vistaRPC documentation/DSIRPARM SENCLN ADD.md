---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM SENCLN ADD 

 property | value 
--- | --- 
 label | DSIRPARM SENCLN ADD
 tag | SENCLN
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add entries into file 19620.703 (DSIR SENSITIVE CLINIC) for use by the ROI Plus application when it identifies documents related to a clinic that the ROI department consider sensitive.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number to HOSPITAL LOCATION File #44 - Required | 