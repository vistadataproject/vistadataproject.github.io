---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC GET VISITS ONLY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC GET VISITS ONLY{:/}
 tag | {::nomarkdown}VST{:/}
 routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Using SELECTED^VSIT this retrieves all visits for the date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer value to the Patient file{:/} | 
| {::nomarkdown}BEG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used.{:/} | 
| {::nomarkdown}END{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used.{:/} | 
| {::nomarkdown}ZLOC{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Kept for backward compatibility.  Do not use.  See SCR parameter. Optional - you can look for visits for specific locations (file 44).  TheZLOC array is expected to be in the format ZLOC(ien)=\\ where ien is thepointer to file 44.{:/} | 
| {::nomarkdown}CAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I '$G(CAT) then screen entries to exclude those whose service category isE,D,X,N, or C{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) = code ^ value   where               code = C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value = for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}