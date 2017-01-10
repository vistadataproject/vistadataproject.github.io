---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP REPORT PRINT 

 property | value 
--- | --- 
 label | SCRP REPORT PRINT
 tag | PRINT
 routine | [SCRPBK3](http://code.osehra.org/dox/Routine_SCRPBK3_source.html)
 return value type | ARRAY
 description | This RPC queues a report to print based thethe query template definition passed in aspart ithe RPC call.The RPC returns the TaskMan task number.Before the report assoicated with the query templateis queued to print, it must pass a validation check.This check makes sure the criteria in the templateis appropriate for the report. If the validation fails,the errors are returned as part of the RPC.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PRINTER | LITERAL | 30 | true | Name of the printer where report should print. | 
| vs:Input_Parameter-8994_02 | RUN DATE | LITERAL | 20 | true | Date report should be printed. | 
| vs:Input_Parameter-8994_02 | TIME | LITERAL | 20 | true | Time of day report should be printed. | 
| vs:Input_Parameter-8994_02 | QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client. | 