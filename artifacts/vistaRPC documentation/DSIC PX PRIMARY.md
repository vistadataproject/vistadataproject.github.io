---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX PRIMARY 

 property | value 
--- | --- 
 label | DSIC PX PRIMARY
 tag | PCE
 routine | [DSICPX2](http://code.osehra.org/dox/Routine_DSICPX2_source.html)
 return value type | SINGLE VALUE
 description | For a VISIT ien this will return the primary PCE diagnosis and the primary PCE provider.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 16 | true | This is the ien to the VISIT file (#9000010). | 