---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CUMULATIVE REPORT 

 property | value 
--- | --- 
 label | GMV CUMULATIVE REPORT
 tag | EN1
 routine | [GMVSC0](http://code.osehra.org/dox/Routine_GMVSC0_source.html)
 return value type | SINGLE VALUE
 description | Prints the Cumulative Vitals Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.  Piece  1: DFN        2: Start date/time of the report range (FileMan format)        3: End date/time of the report range (FileMan format)        4: n/a        5: Device name (File 3.5, Field .01)        6: Device internal entry number        7: date/time to print the report (FileMan format)        8: ward internal entry number (File 42)        9: hospital location internal entry number (File 44)       10: list of rooms separated by a comma (e.g., 200,210,220) | 




 ###### Generated on January 11th 2017, 6:39:43 am