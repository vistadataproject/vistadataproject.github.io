---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VEJDWPB GET VISITS ONLY 

 property | value 
--- | --- 
 label | VEJDWPB GET VISITS ONLY
 tag | VS
 routine | [VEJDVST2](http://code.osehra.org/dox/Routine_VEJDVST2_source.html)
 return value type | GLOBAL ARRAY
 description | This loops through the Visit file (#9000010) AA cross reference to findall visits for a patient and date range

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 12 | true | This is the pointer value to the Patient file | 
| BEG | LITERAL | 14 | true | Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used. | 
| END | LITERAL | 14 | true | Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used. | 
| ZLOC | LIST | 15 | true | Optional - you can look for visits for specific locations (file 44).  TheLC array is expected to be in the format LC(ien)=\\ where ien is thepointer to file 44. | 
| CAT | LITERAL | 1 | true | This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I '$G(CAT) then do not return entries whose service category is E,D,X,N,or C | 
| VECLIN | LIST |  | true |  VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.    VECLIN - optional - passed by reference    VECLIN(#) = clinic name or ien | 
| SCODE | LIST |  | true |  This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.     SCODE - optional - passed by reference    SCODE(#) = 3-digit stop code (lookup on C xref) | 
| VEDIV | LIST |  | true |  This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.      VEDIV - optional - passed by reference     VEDIV(#) = division name or ien | 




 ###### Generated on January 11th 2017, 6:39:43 am