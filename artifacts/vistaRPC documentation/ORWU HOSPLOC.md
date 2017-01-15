---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HOSPLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HOSPLOC{:/}
 tag | {::nomarkdown}HOSPLOC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of hospital locations for use in a long list box.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HOSPLOC^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return a set of locations from HOSPITAL LOCATION
 First comment | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}
 Input parameters | {::nomarkdown}FROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S I=0,CNT=44<br> F  Q:I'<CNT  S FROM=$O(^SC("B",FROM),DIR) Q:FROM=""  D  ; IA# 10040.<br> . S IEN="" F  S IEN=$O(^SC("B",FROM,IEN),DIR) Q:'IEN  D<br> . . Q:("CW"'[$P($G(^SC(IEN,0)),U,3)!('$$ACTLOC(IEN)))<br> . . S I=I+1,Y(I)=IEN_"^"_FROM{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}