---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MDCP MESSAGE BY IEN 

 property | value 
--- | --- 
 label | MDCP MESSAGE BY IEN
 tag | GETMSG
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns an HL7 message based on its IEN.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MDCPMSG | LITERAL |  | true | This is the ien of the message in file 772. | 