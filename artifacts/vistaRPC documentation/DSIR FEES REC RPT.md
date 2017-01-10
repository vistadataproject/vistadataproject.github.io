---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR FEES REC RPT 

 property | value 
--- | --- 
 label | DSIR FEES REC RPT
 tag | FEESREC
 routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC produces the data for the Fees Recieved report.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | The internal FileMan format date to start the report. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | This is an optional date (FM format) to end the reporting period.  The default will be the current date the report is requested. | 
| vs:Input_Parameter-8994_02 | DIVISIONS | LITERAL | 999 | true | This is a variable '^' delimited containing selected Divisions from which the user may see data. | 