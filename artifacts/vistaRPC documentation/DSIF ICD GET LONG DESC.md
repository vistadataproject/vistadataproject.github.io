---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF ICD GET LONG DESC 

 property | value 
--- | --- 
 label | DSIF ICD GET LONG DESC
 tag | LD
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | SINGLE VALUE
 description | This RPC will return the long description (max 245 characters) for the specified code.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFVAL | LITERAL |  | true | This is the internal value of the code you wish to lookup. This input is required. | 
| DSIFFIL | LITERAL |  | true | This is the file you wish to search. This input is required. Ex.  80 - Diagnosis     80.1 - Procedure | 
| DSIFDT | LITERAL |  |  | This is the date you wish to search to apply code set versioning. This input is optional, if no date is passed the date will default to today. | 




 ###### Generated on January 11th 2017, 6:39:43 am