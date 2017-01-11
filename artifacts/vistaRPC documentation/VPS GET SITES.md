---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET SITES 

 property | value 
--- | --- 
 label | VPS GET SITES
 tag | GETSITES
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Return value is a list of treating facilities associated with the patient given the SSN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSSN | LITERAL | 12 | true | Patient SSN | 