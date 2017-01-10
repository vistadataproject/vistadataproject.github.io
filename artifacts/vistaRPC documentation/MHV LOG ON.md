---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MHV LOG ON 

 property | value 
--- | --- 
 label | MHV LOG ON
 tag | LOGON
 routine | [MHVUL1](http://code.osehra.org/dox/Routine_MHVUL1_source.html)
 return value type | SINGLE VALUE
 description | Turns on MHV application logging.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DTM | LITERAL | 15 | true | Purge Date/Time.Defaults to Today + 30. | 