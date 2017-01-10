---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD TMG REPORTS 

 property | value 
--- | --- 
 label | KMPD TMG REPORTS
 tag | TMGRPT
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | ARRAY
 description | Get Timing Reports data.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATES | LIST | 245 | true | Array containing report dates in format:        array(0)=FMStartDate^FMEndDate^ExtStartDate^ExtEndDate        array(1)=NumberOfSessions ex:     KMPDATE(0)=\3070925^3071001^Sep 25, 2007^Oct 01, 2007\        KMPDATE(1)=7 | 
| vs:Input_Parameter-8994_02 | TIME FRAME | LITERAL | 30 | true | Time Frame: Prime Time            Non-Prime Time | 
| vs:Input_Parameter-8994_02 | REPORT NAME | LITERAL | 120 | true | Name of report (free text). | 
| vs:Input_Parameter-8994_02 | TTL SEARCH | LITERAL | 30 | true | Time-To-Load Search criteria:        1: User Name        2: Client Name        3: IP Address        4: All Items | 
| vs:Input_Parameter-8994_02 | SECONDS | LITERAL | 10 | true | Threshold seconds. | 
| vs:Input_Parameter-8994_02 | HOUR | LITERAL | 30 | true | Hour | 