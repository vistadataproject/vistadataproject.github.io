---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC GET VISITS ONLY 

 property | value 
--- | --- 
 label | DSIC GET VISITS ONLY
 tag | VST
 routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
 return value type | GLOBAL ARRAY
 description | Using SELECTED^VSIT this retrieves all visits for the date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 12 | true | This is the pointer value to the Patient file | 
| BEG | LITERAL | 14 | true | Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used. | 
| END | LITERAL | 14 | true | Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used. | 
| ZLOC | LIST | 15 | true | Kept for backward compatibility.  Do not use.  See SCR parameter. Optional - you can look for visits for specific locations (file 44).  TheZLOC array is expected to be in the format ZLOC(ien)=\\ where ien is thepointer to file 44. | 
| CAT | LITERAL | 1 | true | This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I '$G(CAT) then screen entries to exclude those whose service category isE,D,X,N, or C | 
| SCR | LIST | 250 | true | SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) = code ^ value   where               code = C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value = for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7) | 




 Generated on January 11th 2017, 7:15:04 am