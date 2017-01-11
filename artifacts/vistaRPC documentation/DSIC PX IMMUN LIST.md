---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX IMMUN LIST 

 property | value 
--- | --- 
 label | DSIC PX IMMUN LIST
 tag | IMMLIST
 routine | [DSICPX1](http://code.osehra.org/dox/Routine_DSICPX1_source.html)
 return value type | ARRAY
 description | This returns a patient's immunization list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 15 | true | This is a pointer to the PATIENT file (#2). | 