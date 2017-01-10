---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFCTFU GET TREATING LIST 

 property | value 
--- | --- 
 label | VAFCTFU GET TREATING LIST
 tag | TFL
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | WORD PROCESSING
 description | Given a patient DFN, this will return a list of treating facilities.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Patient DFN. | LITERAL | 255 | true | Patient DFN from PATIENT file (#2). | 