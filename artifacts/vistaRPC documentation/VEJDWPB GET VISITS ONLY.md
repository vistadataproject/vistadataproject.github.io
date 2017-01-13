---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJDWPB GET VISITS ONLY 

 property | value 
--- | --- 
 label | {::nomarkdown}VEJDWPB GET VISITS ONLY{:/}
 tag | {::nomarkdown}VS{:/}
 routine | [VEJDVST2](http://code.osehra.org/dox/Routine_VEJDVST2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This loops through the Visit file (#9000010) AA cross reference to findall visits for a patient and date range{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer value to the Patient file{:/} | 
| {::nomarkdown}BEG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used.{:/} | 
| {::nomarkdown}END{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used.{:/} | 
| {::nomarkdown}ZLOC{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - you can look for visits for specific locations (file 44).  TheLC array is expected to be in the format LC(ien)=\\ where ien is thepointer to file 44.{:/} | 
| {::nomarkdown}CAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I '$G(CAT) then do not return entries whose service category is E,D,X,N,or C{:/} | 
| {::nomarkdown}VECLIN{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.    VECLIN - optional - passed by reference    VECLIN(#) = clinic name or ien{:/} | 
| {::nomarkdown}SCODE{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.     SCODE - optional - passed by reference    SCODE(#) = 3-digit stop code (lookup on C xref){:/} | 
| {::nomarkdown}VEDIV{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.      VEDIV - optional - passed by reference     VEDIV(#) = division name or ien{:/} | 




 Generated on January 13th 2017, 7:15:28 am