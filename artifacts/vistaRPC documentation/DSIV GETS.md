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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IENS | LITERAL | 16 | true | INSURANCE BUFFER file internal entry number or IENS. | 
| vs:Input_Parameter-8994_02 | FIELDS | LITERAL | 240 | true | Field list (optional).  Default is all top-level fields. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 16 | true | Flags (optional).  Default is external format, omit empty fields. | 