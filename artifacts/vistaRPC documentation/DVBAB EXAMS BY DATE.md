---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB EXAMS BY DATE 

 property | value 
--- | --- 
 label | DVBAB EXAMS BY DATE
 tag | EXAMBYDT
 routine | [DVBABEBD](http://code.osehra.org/dox/Routine_DVBABEBD_source.html)
 return value type | GLOBAL ARRAY
 description | Provides a report by date range of all AMIE/CAPRI exam requests.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BEGDT | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | ENDDT | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | DVBADLMTR | LITERAL | 1 | true | The delimiter indicates whether the report should be produced in a comma delimited format (.csv file) or not. DVBADLMTR=0 means report displays inplain text. DVBADLMTR=1 means report will be created as a .csv fileimportable to Excel. | 