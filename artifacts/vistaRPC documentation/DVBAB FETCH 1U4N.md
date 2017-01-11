---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB FETCH 1U4N 

 property | value 
--- | --- 
 label | DVBAB FETCH 1U4N
 tag | U1N4
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieve the 1u4n field for the list of patient IENSprovided as the only argument.  Each IEN will besent back with field .0905 appended after a caret.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ARR | LIST |  | true | List of patient IENs | 




 ###### Generated on January 11th 2017, 6:39:43 am