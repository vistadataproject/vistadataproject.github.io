---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV GETS 

 property | value 
--- | --- 
 label | DSIV GETS
 tag | GETS
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | ARRAY
 description | Returns details of INSURANCE BUFFER file entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IENS | LITERAL | 16 | true | INSURANCE BUFFER file internal entry number or IENS. | 
| FIELDS | LITERAL | 240 | true | Field list (optional).  Default is all top-level fields. | 
| FLAGS | LITERAL | 16 | true | Flags (optional).  Default is external format, omit empty fields. | 




 ###### Generated on January 11th 2017, 6:39:43 am