---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV ENTERED IN ERROR-PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV ENTERED IN ERROR-PATIENT{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [GMVER0](http://code.osehra.org/dox/Routine_GMVER0_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Prints a report of all vitals/measurements entered in error for theselected patient for a given date/time range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}150{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A multi-piece variable that identifies the values needed to run the report.   Piece  1: DFN         2: Start date/time of the report range (FileMan format)         3: End date/time of the report range (FileMan format)         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}