---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV ENTERED IN ERROR-PATIENT 

 property | value 
--- | --- 
 label | GMV ENTERED IN ERROR-PATIENT
 tag | EN1
 routine | [GMVER0](http://code.osehra.org/dox/Routine_GMVER0_source.html)
 return value type | SINGLE VALUE
 description | Prints a report of all vitals/measurements entered in error for theselected patient for a given date/time range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.   Piece  1: DFN         2: Start date/time of the report range (FileMan format)         3: End date/time of the report range (FileMan format)         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a | 




 ###### Generated on January 11th 2017, 6:39:43 am