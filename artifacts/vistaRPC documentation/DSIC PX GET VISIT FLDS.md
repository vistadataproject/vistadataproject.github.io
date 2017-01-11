---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX GET VISIT FLDS 

 property | value 
--- | --- 
 label | DSIC PX GET VISIT FLDS
 tag | ILOOK
 routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
 return value type | ARRAY
 description | This will return the internal and external values for selected fields from the VISIT file (#9000010).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSICD | LIST | 20 | true | DSICD(n) = p1^p2  for n=0,1,2,3,...  where  p1 := \V\ if this is the VISIT ifn, or VISIT field#  p2 := VISIT ifn (if p1=\V\), or format code (if p1=field#)        Format codes:  I:internal  E:external  B:both  DSICD(n) = V^ifn is required | 