---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDVG XLATE DATA2IDX 

 property | value 
--- | --- 
 label | DSIC DDVG XLATE DATA2IDX
 tag | XLATE2
 routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
 return value type | ARRAY
 description | Will take an external value and perform a FILEMAN lookup.  Restrictions are:1.  The external value must be resolvable to a unique entry.2.  There must be an index on the field that contains the value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the file (or subfile) number upon which the lookup will be done | 
| IENS | LITERAL | 50 | true | This is the standard IENS parameter when FIND1^DIC is invoked.  It is only needed if the lookup is on a multiple instead of the parent file. | 
| VALUE | LITERAL | 250 | true | This is the value in external format used for the lookup.lookup. | 




 Generated on January 11th 2017, 7:15:04 am