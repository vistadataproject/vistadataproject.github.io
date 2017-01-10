---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB PENDING C&P REPORT 

 property | value 
--- | --- 
 label | DVBAB PENDING C&P REPORT
 tag | STRT
 routine | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
 return value type | GLOBAL ARRAY
 description | Generates a report containing the pending C&P exam requests.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DVBCSORT | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | RSTAT | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | ERDAYS | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | OLDAYS | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | ADIVNUM | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | ELTYP | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | DVBADLMTR | LITERAL |  | true | This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR=0 means report will be in plain text and DVBADLMTR=1 means create output in comma delimited format. | 
| vs:Input_Parameter-8994_02 | ROFILTER | LITERAL |  | true | The value of ROFILTER indicates which Regional Office the Pending C&P Report is for. This parameter is only passed when the Pending C&P Report is being run from the Consolidated Remote Reports menu. | 