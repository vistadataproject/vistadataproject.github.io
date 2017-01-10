---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS MANUAL XMIT DATA 

 property | value 
--- | --- 
 label | OOPS MANUAL XMIT DATA
 tag | ENT
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | ARRAY
 description | This broker call is the front end for calling the routine to transmitdata to the AAC for DOL (CA1 and CA2s) or to transmit data to the National Database (NDB).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This input parameter contains the date that the claims were originallytransmitted and should be re-transmitted for, the queue date and time, andwhether the data to be transmitted should be DOL or NDB data.  The format is:TRANSDT^QUEUEDT@TIME^DOL (or NDB). | 