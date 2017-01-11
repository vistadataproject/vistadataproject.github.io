---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDVG XLATE IDX2DATA 

 property | value 
--- | --- 
 label | DSIC DDVG XLATE IDX2DATA
 tag | XLATE1
 routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
 return value type | ARRAY
 description | This will return the external format for an internal Fileman field value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the number of the file (or subfile) for which the external format of the the field is desired. | 
| FIELD | LITERAL | 20 | true | This is the field number for the file (or subfile) | 
| VALUE | LITERAL | 250 | true | This is the internal Fileman format for the data stored at FILE,FIELD.  This does not require a record number. | 




Generated on January 11th 2017, 6:34:23 am