---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG LIST 

 property | value 
--- | --- 
 label | KMPD ERROR LOG LIST
 tag | ERRLIST
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | GLOBAL ARRAY
 description | Return a list of errors for a certain date from file #3.075 (ERROR LOG).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 60 | true | Internal entry for file #3.075 (ERROR LOG).  This value will be $P($H,\,\). | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL | 254 | true | Screen for ERROR TYPE. | 
| vs:Input_Parameter-8994_02 | DATAGLOBAL | LITERAL | 60 | true | Return global for data (^TMP($J). | 