---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP QUERY CHECK NAME 

 property | value 
--- | --- 
 label | SCRP QUERY CHECK NAME
 tag | NAME
 routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
 return value type | ARRAY
 description | This RPC checks to see if the user already has a querywith the name being passed in as part of the RPC.If there is already a query with the same name, the RPCpasses back the internal entry number of the RPC, otherwisethe RPC passes back a 0.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| QUERY NAME | LITERAL | 30 | true | Name of the query that needs to be checked for existence. | 
| USER | LITERAL | 30 | true | Internal entry number of user that the query namewill be assoicated with, usually DUZ. | 




 Generated on January 11th 2017, 7:15:03 am