---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DDR WP FILER 

 property | value 
--- | --- 
 label | DSIV DDR WP FILER
 tag | WP
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | ARRAY
 description |  This will file the text into the specified word processing field.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true |  This is the file (or subfile) number for which the word processing field belongs. | 
| IENS | LITERAL | 50 | true |  This is the appropriate Fileman DBS IENS for filing the word processing field | 
| FIELD | LITERAL | 20 | true | This is field number of the word processing field | 
| FLAGS | LITERAL | 10 | true |  This is the FLAGS parameter for the WP^DIE call. | 
| DATA | LIST | 250 | true |  This is the text to be filed into the word processing field. | 




 Generated on January 11th 2017, 7:15:04 am