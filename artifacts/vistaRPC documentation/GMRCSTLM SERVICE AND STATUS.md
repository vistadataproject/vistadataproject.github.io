---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMRCSTLM SERVICE AND STATUS 

 property | value 
--- | --- 
 label | GMRCSTLM SERVICE AND STATUS
 tag | ENOR
 routine | [GMRCSTLM](http://code.osehra.org/dox/Routine_GMRCSTLM_source.html)
 return value type | GLOBAL ARRAY
 description | This returns a report of consults for a service/grouper for agiven set of statuses and date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SERVICE | REFERENCE |  | true | The service or grouper to create the list for.  The default if none ispassed is \1\ for ALL SERVICES. | 
| START DATE | LITERAL | 7 | true | This is the start date range for the report or \ALL\ for all dates.  Thedefault if none is passed is \ALL\ and the END DATE will not be used. | 
| END DATE | LITERAL | 7 | true | This is the ending date range for the report.  Not used if the START DATEis \ALL\ for all dates. | 
| STATUSES | LITERAL |  | true | This is a comma separated list of the statuses to include in the report.If none is passed the default list is \3,4,5,6,8,9,11,99\ which is all thestatus that are pending resolution. | 
| LIST CONTROL | LITERAL | 1 | true |    0, null or not define then just the display list is displayed   1 then the list will be two pieces with the first being the ien of the        consult for selection in the gui and the second piece being the        display text.  10 then the consults will have a line number on them for selection  20 then the consults will have the consult number displayed 100 then use abbreviations for the statuses 1, (10 or 20) and 100 can be added together to add there features | 




 ###### Generated on January 11th 2017, 6:39:42 am