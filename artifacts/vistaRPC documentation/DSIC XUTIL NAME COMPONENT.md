---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XUTIL NAME COMPONENT 

 property | value 
--- | --- 
 label | DSIC XUTIL NAME COMPONENT
 tag | NAMECOM
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | SINGLE VALUE
 description | This will take a standard VistA person name in the format Last,First M and return the individual name components.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VNAME | LITERAL | 50 | true | This is the standard VistA person name in the format Last,First M | 