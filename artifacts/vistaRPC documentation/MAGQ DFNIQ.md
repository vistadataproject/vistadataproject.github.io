---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ DFNIQ 

 property | value 
--- | --- 
 label | MAGQ DFNIQ
 tag | DFNIQ
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | SINGLE VALUE
 description | This provides a method of sending a Patient DFN VistA mail message from client methods.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL |  | true | This is the message content that is sent if the Send Flag is set. | 
| vs:Input_Parameter-8994_02 | PLACE | LITERAL | 1 | true | This is the internal entry number of the site parameter file that designates the local Imaging configuration from which this messageis addressed. | 
| vs:Input_Parameter-8994_02 | SEND | LITERAL | 1 | true | If this is the last line of the message and if this value is set to\1\ then the message will be sent. | 
| vs:Input_Parameter-8994_02 | APPLICATION | LITERAL | 36 | true | This value is set to the application that has created this message. | 