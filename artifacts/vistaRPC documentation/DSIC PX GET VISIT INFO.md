---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX GET VISIT INFO 

 property | value 
--- | --- 
 label | DSIC PX GET VISIT INFO
 tag | VSTALL
 routine | [DSICPX2](http://code.osehra.org/dox/Routine_DSICPX2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC is a wrapper around the ENCEVENT^PXKENC api.  It does not return all the data that the PX api does.  It returns a subset of that data.  The PX api is designed to return all the visit date in the various files for a VISIT ien.  See routine for more detailed description.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 16 | true | This is the internal entry number (ien) to the VISIT file (#9000010) | 