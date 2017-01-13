---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP REPORT PRINT 

 property | value 
--- | --- 
 label | {::nomarkdown}SCRP REPORT PRINT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [SCRPBK3](http://code.osehra.org/dox/Routine_SCRPBK3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC queues a report to print based thethe query template definition passed in aspart ithe RPC call.The RPC returns the TaskMan task number.Before the report assoicated with the query templateis queued to print, it must pass a validation check.This check makes sure the criteria in the templateis appropriate for the report. If the validation fails,the errors are returned as part of the RPC.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PRINTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the printer where report should print.{:/} | 
| {::nomarkdown}RUN DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date report should be printed.{:/} | 
| {::nomarkdown}TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Time of day report should be printed.{:/} | 
| {::nomarkdown}QUERY DEFINITION{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.{:/} | 




 Generated on January 13th 2017, 6:24:32 am