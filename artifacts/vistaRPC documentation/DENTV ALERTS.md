---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV ALERTS 

 property | value 
--- | --- 
 label | DENTV ALERTS
 tag | GAL
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | ARRAY
 description | This RPC gets Dental Alerts from file 220.  It also sets them into 220.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | The patient ien to look up Dental Alerts in file 220. | 
| vs:Input_Parameter-8994_02 | ALERTS | LIST | 30 | true | List of Alert text entries to be added to the dental patient, e.g.:Sedation PremedTravel Issue | 