---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU INPLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU INPLOC{:/}
 tag | {::nomarkdown}INPLOC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of wards from the HOSPITAL LOCATION file.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | INPLOC^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return a set of wards from HOSPITAL LOCATION
 First comment | {::nomarkdown}<pre> .Y=returned list, FROM=text to $O from, DIR=$O direction,</pre>{:/}
 Input parameters | {::nomarkdown}FROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S I=0,CNT=44<br> F  Q:I'<CNT  S FROM=$O(^SC("B",FROM),DIR) Q:FROM=""  D  ; IA# 10040.<br> . S IEN="" F  S IEN=$O(^SC("B",FROM,IEN),DIR) Q:'IEN  D<br> . . I ($P($G(^SC(IEN,0)),U,3)'="W") Q<br> . . I '$$ACTLOC(IEN) Q<br> . . S I=I+1,Y(I)=IEN_"^"_FROM{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}