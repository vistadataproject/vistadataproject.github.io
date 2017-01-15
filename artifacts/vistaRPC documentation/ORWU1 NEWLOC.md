---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU1 NEWLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU1 NEWLOC{:/}
 tag | {::nomarkdown}NEWLOC{:/}
 routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Clinics, Wards, and \Other\ category entries from the HOSPITAL LOCATION (#44) file.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | NEWLOC^[ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
 Method comment | Return "CZ" locations from HOSPITAL LOCATION file.
 First comment | {::nomarkdown}C=Clinics, Z=Other, screened by $$ACTLOC^ORWU.<br/>.Y=returned list, ORFROM=text to $O from, DIR=$O direction.{:/}
 Input parameters | {::nomarkdown}ORFROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S I=0,CNT=44<br> F  Q:I'<CNT  S ORFROM=$O(^SC("B",ORFROM),DIR) Q:ORFROM=""  D  ; IA# 10040.<br> . S IEN="" F  S IEN=$O(^SC("B",ORFROM,IEN),DIR) Q:'IEN  D<br> . . Q:("C"'[$P($G(^SC(IEN,0)),U,3)!('$$ACTLOC^ORWU(IEN)))<br> . . S I=I+1,Y(I)=IEN_"^"_ORFROM<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}