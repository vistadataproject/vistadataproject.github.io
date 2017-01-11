---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV PT GRAPH 

 property | value 
--- | --- 
 label | GMV PT GRAPH
 tag | EN1
 routine | [GMVSR0](http://code.osehra.org/dox/Routine_GMVSR0_source.html)
 return value type | SINGLE VALUE
 description | Prints Vitals/Measurements Graphic Reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.    Piece  1: DFN         2: Start date/time of the report range (FileMan format)         3: End date/time of the report range (FileMan format)         4: Number indicating graph type *         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: ward internal entry number (File 42)         9: hospital location internal entry number (File 44)        10: list of rooms separated by a comma (e.g., 200,210,220) * Graph = 1 prints Vital Signs Record        = 2 prints B/P Plotting Chart        = 3 prints Weight Chart        = 4 prints Pulse Oximetry/Respiratory Graph        = 5 prints Pain Chart | 




Generated on January 11th 2017, 6:34:23 am