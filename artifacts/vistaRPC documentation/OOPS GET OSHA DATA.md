---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET OSHA DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET OSHA DATA{:/}
 tag | {::nomarkdown}OSHA{:/}
 routine | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call returns the data needed to produce the Log of Federal Occupational Injuries and Illnesses Report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the Start Date and End date of the Report, the StationIEN or an 'A' to include all stations at that facilitiy and whether to includenames on the report.  The format is STARTDT^ENDDT^STATION^Y (or N if no).{:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This paramter contains the menu that has called the report.  This is mainlybeing used to exclude names from displaying on the Union menu.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}