---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV UPDATE COMMENT SORT 

 property | value 
--- | --- 
 label | DENTV UPDATE COMMENT SORT
 tag | UPDATE
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | SINGLE VALUE
 description | This will re-sort a providers canned comments within a category. It will return a 1^Successful or -1^Unsuccessful.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DENTV | LIST |  | true | This should be a list of \CATEGORY^SORT ORDER^IEN\ for all of the canned comments for the provider. | 