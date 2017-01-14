---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU INPLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU INPLOC{:/}
 tag | {::nomarkdown}INPLOC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of wards from the HOSPITAL LOCATION file.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | INPLOC^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return a set of wards from HOSPITAL LOCATION
 First comment | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Code | ```  N I,IEN,CNT S I=0,CNT=44
 F  Q:I'<CNT  S FROM=$O(^SC("B",FROM),DIR) Q:FROM=""  D  ; IA# 10040.
 . S IEN="" F  S IEN=$O(^SC("B",FROM,IEN),DIR) Q:'IEN  D
 . . I ($P($G(^SC(IEN,0)),U,3)'="W") Q
 . . I '$$ACTLOC(IEN) Q
 . . S I=I+1,Y(I)=IEN_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am