---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CATEGORIES 

 property | value 
--- | --- 
 label | DENTV GET CATEGORIES
 tag | CAT
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | ARRAY
 description | This rpc will return the different categories (fields 5 & 6) in file 228

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TYP | LITERAL | 30 | true | This is optional.  If passed it should be either 1, 2, or 12If it is not passed, then this call will default to 12 For file 228,  If TYP=1, then only return the subcategory-1 names (field 5)  If TYP=2, then only return the subcategory-2 names (field 6)  If TYP=12, then return both subcategories' names | 