---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD_DEL SENSITIVE PROV 

 property | value 
--- | --- 
 label | DSIR ADD_DEL SENSITIVE PROV
 tag | ADDPROV
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add or delete entries in file 19620.94 (DSIR SENSITIVE PROVIDERS)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PROV | LITERAL | 99 | true | This is the internal entry number of the New Person file (#200) of the person to be flagged as a sensitive provider in the ROI package. | 
| DEL | LITERAL | 1 | true | This is a flag that if true will delete the record pointed to by parameter 1 from file 19620.94. | 




Generated on January 11th 2017, 6:34:23 am