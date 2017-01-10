---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR KEY VALIDATOR 

 property | value 
--- | --- 
 label | DDR KEY VALIDATOR
 tag | KEYVAL
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | ARRAY
 description | Validates that values passed in do not violate key integrity.  UnderlyingDBS call is KEYVAL^DIE.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VALUES TO VALIDATE | LIST | 512 | true | Array of data used to create FDA for KEYVAL^DIE call.  Alternating linescontain file#^IENS^field# and value associated with preceding file, record,and field. | 