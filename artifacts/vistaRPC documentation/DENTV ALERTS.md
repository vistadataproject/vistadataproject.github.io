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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | The patient ien to look up Dental Alerts in file 220. | 
| ALERTS | LIST | 30 | true | List of Alert text entries to be added to the dental patient, e.g.:Sedation PremedTravel Issue | 




 Generated on January 11th 2017, 7:15:04 am