---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET DETAIL LOCATION 

 property | value 
--- | --- 
 label | OOPS GET DETAIL LOCATION
 tag | GETDLOC
 routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call returns the entries in the Detail Location sub file inthe ASISTS SETTING OF INJURY File (#2261.4).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 30 | true | This parameter consists of the File, Station, and IEN of the data element to bereturned in the results. | 