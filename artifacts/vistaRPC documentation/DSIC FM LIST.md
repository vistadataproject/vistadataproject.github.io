---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM LIST 

 property | value 
--- | --- 
 label | DSIC FM LIST
 tag | LIST
 routine | [DSICFM05](http://code.osehra.org/dox/Routine_DSICFM05_source.html)
 return value type | GLOBAL ARRAY
 description | The RPC provides a wrapper around the LIST^DIC API.  It exposes more of the functionality of the API than the DSIC DDR LISTER RPC. For a lookup value, return all entries starting from that lookup value and which collates after that lookup value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LIST | 250 | true | The INPUT(n) = tag^value  where  tag = LIST^DIC input parameter name such as        FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  FROM  PART  SCREEN  value = value for that input parameter The INDEX variable consists only of a single index name. For those input parameters that allow an array, you can pass that array in the tag such as FROM(2)^lookup value | 




 Generated on January 11th 2017, 7:15:04 am