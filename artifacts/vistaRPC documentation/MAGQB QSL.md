---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQB QSL 

 property | value 
--- | --- 
 label | MAGQB QSL
 tag | BPQSL
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | ARRAY
 description | This procedure call sets the queue file last process queue to the inputparameter.  This is used by the Queue Manager reset the queue method.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | QUEUE TYPE | LITERAL | 256 | true | This defines the queue type to be reset. | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 256 | true | This is the QUEUE file (#2006.03) internal entry number. | 