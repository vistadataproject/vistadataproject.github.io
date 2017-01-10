---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN2 SCHEDULE CONSULT 

 property | value 
--- | --- 
 label | ORQQCN2 SCHEDULE CONSULT
 tag | SCH
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | SINGLE VALUE
 description | Changes status of consult to \Scheduled\, optionally adding a comment andsending alerts.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Consult IEN | LITERAL | 16 | true | Consult IEN in file 123. | 
| vs:Input_Parameter-8994_02 | Responsible provider | LITERAL | 32 | true |  | 
| vs:Input_Parameter-8994_02 | Date of action | LITERAL | 16 |  |  | 
| vs:Input_Parameter-8994_02 | Send alerts? | LITERAL | 2 | true |  | 
| vs:Input_Parameter-8994_02 | Send alerts to | LITERAL | 100 | true | \;\ separated list of alert recipients - pointers to file 200. | 
| vs:Input_Parameter-8994_02 | Comments | LIST |  |  | Array of comments to be added with this action. | 