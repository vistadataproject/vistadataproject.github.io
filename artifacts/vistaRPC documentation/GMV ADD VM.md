---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV ADD VM 

 property | value 
--- | --- 
 label | GMV ADD VM
 tag | EN1
 routine | [GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL | 255 | true | This variable contains the data needed to create a Vital/Measurementrecord in the GMRV Vital Measurement (#120.5) file. The values are parsedout of the GMRVDATA variable and filed. GMRVDATA has the following data: piece1^piece2^piece3^piece4^piece5  where:  piece1 = date/time in FileMan internal format  piece2 = patient number from FILE 2 (i.e., DFN)  piece3 = vital type, a semi-colon, the reading, a semi-colon, and            oxygen flow rate and percentage values [optional] (e.g.,           21;99;1 l/min 90%)  piece4 = hospital location (FILE 44) pointer value  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the            qualifier (File 120.52) internal entry numbers separated by           colons (e.g., 547*50:65) | 