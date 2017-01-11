---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN GET CONSULT 

 property | value 
--- | --- 
 label | ORQQCN GET CONSULT
 tag | GETCSLT
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | ARRAY
 description | Given a Consult ID from file 123, return the zero node to the client forloading into a consult record in RESULTS[0].  If the consult has anyassociated TIU records (completion, addenda) these will be returned inRESULTS[i..j].


### Method description

 property | value 
--- | --- 
 Method comment | Retrieve a complete consult record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Consult ID | LITERAL | 16 | true | Consult IEN from file #123, REQUEST/CONSULT. | 




 ###### Generated on January 11th 2017, 6:39:42 am