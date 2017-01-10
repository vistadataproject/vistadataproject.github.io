---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET DFN 

 property | value 
--- | --- 
 label | VPS GET DFN
 tag | GETDFN
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | SINGLE VALUE
 description | Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Returns patient DFN associated with SSN on record.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSSN | LITERAL | 12 | true |  | 