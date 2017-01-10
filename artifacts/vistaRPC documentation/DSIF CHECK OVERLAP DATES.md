---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CHECK OVERLAP DATES 

 property | value 
--- | --- 
 label | DSIF CHECK OVERLAP DATES
 tag | CHKOVLP
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | SINGLE VALUE
 description | This RPC checks the from and to dates to make sure they do not overlap with another request.  Logic copied from FBAAUTL2.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required) | 
| vs:Input_Parameter-8994_02 | FBBEGDT | LITERAL | 14 | true | From Date to check (FM format, Required) | 
| vs:Input_Parameter-8994_02 | FBENDDT | LITERAL | 14 | true | To Date (FM format, Optional) | 