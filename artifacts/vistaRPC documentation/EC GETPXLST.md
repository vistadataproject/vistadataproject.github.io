---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPXLST 

 property | value 
--- | --- 
 label | EC GETPXLST
 tag | PXFND
 routine | [ECUMRPC2](http://code.osehra.org/dox/Routine_ECUMRPC2_source.html)
 return value type | GLOBAL ARRAY
 description | Performs a search on a procedure string and returns an array list of matchesfrom file #81 and/or #725.User can type     1.  \A.search string\ to search file 81.    2.  \B.search string\ to search file 725.    3.  \search string\ to search both files.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Procedure search string. | 