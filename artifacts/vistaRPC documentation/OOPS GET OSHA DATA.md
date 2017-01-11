---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET OSHA DATA 

 property | value 
--- | --- 
 label | OOPS GET OSHA DATA
 tag | OSHA
 routine | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call returns the data needed to produce the Log of Federal Occupational Injuries and Illnesses Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This parameter contains the Start Date and End date of the Report, the StationIEN or an 'A' to include all stations at that facilitiy and whether to includenames on the report.  The format is STARTDT^ENDDT^STATION^Y (or N if no). | 
| CALL | LITERAL | 10 | true | This paramter contains the menu that has called the report.  This is mainlybeing used to exclude names from displaying on the Union menu. | 




Generated on January 11th 2017, 6:34:23 am