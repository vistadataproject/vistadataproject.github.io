---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS NEEDLESTICK LOG 

 property | value 
--- | --- 
 label | OOPS NEEDLESTICK LOG
 tag | NSTICK
 routine | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call retrieves the data necessary to produce the Log ofNeedlestick report.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This parameter consists of 4 parts, the Start Date and End Date for the report, the Station(s) to be included on the report, and whether or not to include names on the report.  The parameter format is STARTDATE^ENDDATE^STATION^Y (or 'N'o).  | 
| vs:Input_Parameter-8994_02 | CALL | LITERAL | 30 | true | This parameter will indicate which menu the report was called from. | 