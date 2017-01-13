---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU GENERIC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU GENERIC{:/}
 tag | {::nomarkdown}GENERIC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of entries from a cross-reference passed in.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of entries from xref in REF
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>REF{:/}
 Lines | ```{::nomarkdown} N I,IEN,CNT S I=0,CNT=44<br/> F  Q:I'<CNT  S FROM=$O(@REF@(FROM),DIR) Q:FROM=""  D<br/> . S IEN="" F  S IEN=$O(@REF@(FROM,IEN),DIR) Q:'IEN  D<br/> . . S I=I+1,Y(I)=IEN_"^"_FROM```{:/}
 Leading comment lines | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}




 Generated on January 13th 2017, 7:11:26 am