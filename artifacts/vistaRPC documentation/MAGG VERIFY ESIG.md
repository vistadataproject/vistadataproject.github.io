---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG VERIFY ESIG 

 property | value 
--- | --- 
 label | MAGG VERIFY ESIG
 tag | ESIG
 routine | [MAGQLOG](http://code.osehra.org/dox/Routine_MAGQLOG_source.html)
 return value type | SINGLE VALUE
 description | Verifies the Electronic signature of the current user.  Uses 'DUZ' defined in the partition.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ESIG | LITERAL | 20 | true | This is the encrypted electronic signature entered by the user on theImaging window. | 