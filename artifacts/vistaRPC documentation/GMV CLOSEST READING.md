---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CLOSEST READING 

 property | value 
--- | --- 
 label | GMV CLOSEST READING
 tag | CLOSEST
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMVDFN | LITERAL | 12 | true | A pointer to the Patient (#2) file (i.e., DFN). | 
| vs:Input_Parameter-8994_02 | GMVDT | LITERAL | 14 | true | The date/time to search from. The default is NOW. | 
| vs:Input_Parameter-8994_02 | GMVT | LITERAL | 5 | true | The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT). | 
| vs:Input_Parameter-8994_02 | GMVFLAG | LITERAL | 1 | true | A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction. | 