---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV VITALS_CAT_QUAL 

 property | value 
--- | --- 
 label | GMV VITALS_CAT_QUAL
 tag | GETVITAL
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | ARRAY
 description | Returns all qualifier information for the vital types selected. This remote procedure call is documented in Integration Agreement 4359.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVLIST | LITERAL | 60 | true | A list of vital type abbreviations (FILE 120.51, Field 1) separated byup-arrows (e.g., \HT^WT\ for height and weight). When the value is null,all qualifier information will be returned for all vital types. | 




Generated on January 11th 2017, 6:34:23 am