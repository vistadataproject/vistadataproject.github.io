---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV LATEST VITALS BY LOCATION 

 property | value 
--- | --- 
 label | GMV LATEST VITALS BY LOCATION
 tag | EN1
 routine | [GMVDS1](http://code.osehra.org/dox/Routine_GMVDS1_source.html)
 return value type | SINGLE VALUE
 description | Prints the latest vitals/measurements for all patients on a given wardlocation.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.    Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: ward internal entry number (File 42)         9: hospital location internal entry number (File 44)        10: n/a | 




Generated on January 11th 2017, 6:34:23 am