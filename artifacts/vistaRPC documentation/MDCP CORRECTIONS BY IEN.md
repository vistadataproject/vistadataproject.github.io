---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MDCP CORRECTIONS BY IEN 

 property | value 
--- | --- 
 label | MDCP CORRECTIONS BY IEN
 tag | GETCORR
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | ARRAY
 description | Gets a list of corrections for a given HL7 message.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MDCPMSG | LITERAL |  | true | The IEN of the message in file 703.1 (the CP REPORT RESULTS file). | 