---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF SEARCH 

 property | value 
--- | --- 
 label | DSIF SEARCH
 tag | SEARCH
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | ARRAY
 description | Used to search Fee Basis authorizations based on from and to dates.on error returns-1^error message

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROMDT | LITERAL | 7 | true | Pass in FM date of Authorizations to start search  | 
| vs:Input_Parameter-8994_02 | TODATE | LITERAL | 7 | true | Pass in FM date of Authorizations to end search | 