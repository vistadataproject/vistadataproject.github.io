---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV LATEST VITALS BY LOCATION 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV LATEST VITALS BY LOCATION{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [GMVDS1](http://code.osehra.org/dox/Routine_GMVDS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Prints the latest vitals/measurements for all patients on a given wardlocation.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}150{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A multi-piece variable that identifies the values needed to run the report.    Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: ward internal entry number (File 42)         9: hospital location internal entry number (File 44)        10: n/a{:/} | 




 Generated on January 13th 2017, 6:55:29 am