---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM FIND 

 property | value 
--- | --- 
 label | DSIC FM FIND
 tag | FIND
 routine | [DSICFM05](http://code.osehra.org/dox/Routine_DSICFM05_source.html)
 return value type | GLOBAL ARRAY
 description | This provides a wrapper around the FIND^DIC API.  It exposes more of the functionality of the API to the RPC than the old DSIC DDR FINDER RPC. For a lookup value, this RPC will return all matches.  It allows for input a multiple screening logic which would be ANDed together.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LIST | 250 | true | he INPUT(n) = tag^value   where   tag = LIST^DIC input parameter name such as        FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  VAL  SCREEN  value = value for that input parameter For those input parameters that allow an array, you can pass that array in the tag such as SCREEN()^lookup value | 




 Generated on January 11th 2017, 7:15:04 am