---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV QUALIFIER TABLE 

 property | value 
--- | --- 
 label | GMV QUALIFIER TABLE
 tag | EN1
 routine | [GMVCAQU](http://code.osehra.org/dox/Routine_GMVCAQU_source.html)
 return value type | GLOBAL ARRAY
 description | Prints a list of categories and qualifiers associated with individualvital types (e.g., blood pressure). Data comes from the GMRV VitalQualifier (#120.52) file and the GMRV Vital Category (#120.53) file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.   Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a | 




 ###### Generated on January 11th 2017, 6:39:43 am