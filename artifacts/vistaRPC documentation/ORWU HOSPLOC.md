---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HOSPLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HOSPLOC{:/}
 tag | {::nomarkdown}HOSPLOC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of hospital locations for use in a long list box.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of locations from HOSPITAL LOCATION
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | ```{::nomarkdown} N I,IEN,CNT S I=0,CNT=44<br/> F  Q:I'<CNT  S FROM=$O(^SC("B",FROM),DIR) Q:FROM=""  D  ; IA# 10040.<br/> . S IEN="" F  S IEN=$O(^SC("B",FROM,IEN),DIR) Q:'IEN  D<br/> . . Q:("CW"'[$P($G(^SC(IEN,0)),U,3)!('$$ACTLOC(IEN)))<br/> . . S I=I+1,Y(I)=IEN_"^"_FROM```{:/}
 Leading comment lines | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}




 Generated on January 13th 2017, 7:11:26 am