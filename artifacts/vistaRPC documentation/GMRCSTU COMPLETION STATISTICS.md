---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMRCSTU COMPLETION STATISTICS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMRCSTU COMPLETION STATISTICS{:/}
 tag | {::nomarkdown}ENOR{:/}
 routine | [GMRCSTU](http://code.osehra.org/dox/Routine_GMRCSTU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This returns a report of completion time statistics for a consultservice/grouper for a given set of statuses and date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}REFERENCE{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The service or grouper to create the list for.  The default if none ispassed is \1\ for ALL SERVICES.{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the start date range for the report or \ALL\ for all dates.  Thedefault if none is passed is \ALL\ and the END DATE will not be used.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ending date range for the report.  Not used if the START DATEis \ALL\ for all dates.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}