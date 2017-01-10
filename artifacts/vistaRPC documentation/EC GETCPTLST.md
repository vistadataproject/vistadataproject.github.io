---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETCPTLST 

 property | value 
--- | --- 
 label | EC GETCPTLST
 tag | CPTFND
 routine | [ECUMRPC2](http://code.osehra.org/dox/Routine_ECUMRPC2_source.html)
 return value type | GLOBAL ARRAY
 description | Performs a search on a CPT string and returns an array list of matches from file #81.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | CPT search string. | 