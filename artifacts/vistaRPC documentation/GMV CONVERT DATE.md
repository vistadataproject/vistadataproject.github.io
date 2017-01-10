---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CONVERT DATE 

 property | value 
--- | --- 
 label | GMV CONVERT DATE
 tag | GETDT
 routine | [GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMRDATE | LITERAL | 30 | true | GMRDATE is the user-supplied date/time text. | 