---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG REASON GET PROPERTIES 

 property | value 
--- | --- 
 label | MAGG REASON GET PROPERTIES
 tag | GET
 routine | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
 return value type | ARRAY
 description | This remote procedure returns the reason properties from the MAG REASONfile (#2005.88)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RSNID | LITERAL |  | true | Identifier of the reason: Internal Entry Number of the record in the MAGREASON file (#2005.88) or the reason code (see the FLAGS parameter). | 
| FLAGS | LITERAL |  |  | Flags that control execution (can be combined):   C  By default, value of the RSNID parameter is treated as     the reason IEN. If this flag is provided, then the reason     code should be passed as the value of the RSNID.   F  Include full details (description text). By default, only     the summary data is returned. | 




 ###### Generated on January 11th 2017, 6:39:43 am