---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CATEG_CODES 

 property | value 
--- | --- 
 label | DENTV GET CATEG_CODES
 tag | CATC
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | GLOBAL ARRAY
 description | This works in conjunction with the DENTV GET CATEGORIES rpc.  You passthe subcategory name and this call will return the array of cpt codesassociated with that subcategory name. end description update 6-23-2003

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYP | LITERAL | 30 | true | This is the subcategory name from file 228 that was retrieved by usingthe DENTV GET CATEGORIES rpc. | 