---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET STATION INFORMATION 

 property | value 
--- | --- 
 label | OOPS GET STATION INFORMATION
 tag | STATINFO
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | ARRAY
 description | This broker call returns the Address, City, State and Zip code for a stationstored in DIC(4 Institution file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | STATIEN | LITERAL |  | true | This is a required parm and it has to be a valid IEN for a station stored in DIC(4  Institution file. | 