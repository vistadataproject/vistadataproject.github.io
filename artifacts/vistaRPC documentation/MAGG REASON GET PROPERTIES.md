---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG REASON GET PROPERTIES 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG REASON GET PROPERTIES{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure returns the reason properties from the MAG REASONfile (#2005.88){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RSNID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifier of the reason: Internal Entry Number of the record in the MAGREASON file (#2005.88) or the reason code (see the FLAGS parameter).{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control execution (can be combined):   C  By default, value of the RSNID parameter is treated as     the reason IEN. If this flag is provided, then the reason     code should be passed as the value of the RSNID.   F  Include full details (description text). By default, only     the summary data is returned.{:/} | 




 Generated on January 13th 2017, 7:11:27 am