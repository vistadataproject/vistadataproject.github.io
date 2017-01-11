---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX GET VISIT INFO2 

 property | value 
--- | --- 
 label | DSIC PX GET VISIT INFO2
 tag | LOOK
 routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
 return value type | ARRAY
 description | Return all field values for a visit in internal or external format or both.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 20 | true | DATA = p1^p2   where  p1 = visit ien or visit's ID -  required       p2 = return format            I := internal values            E := external values            B := both internal and external formats - default | 