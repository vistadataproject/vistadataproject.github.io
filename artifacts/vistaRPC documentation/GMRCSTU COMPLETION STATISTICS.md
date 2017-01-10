---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMRCSTU COMPLETION STATISTICS 

 property | value 
--- | --- 
 label | GMRCSTU COMPLETION STATISTICS
 tag | ENOR
 routine | [GMRCSTU](http://code.osehra.org/dox/Routine_GMRCSTU_source.html)
 return value type | GLOBAL ARRAY
 description | This returns a report of completion time statistics for a consultservice/grouper for a given set of statuses and date range.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SERVICE | REFERENCE |  | true | The service or grouper to create the list for.  The default if none ispassed is \1\ for ALL SERVICES. | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | This is the start date range for the report or \ALL\ for all dates.  Thedefault if none is passed is \ALL\ and the END DATE will not be used. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | This is the ending date range for the report.  Not used if the START DATEis \ALL\ for all dates. | 