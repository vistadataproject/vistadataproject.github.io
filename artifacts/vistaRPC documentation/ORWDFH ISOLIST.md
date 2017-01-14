---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH ISOLIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ISOLIST{:/}
 tag | {::nomarkdown}ISOLIST{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active Isolation/Precaution Type (file #119.4) entries.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of active isolations/precautions
 Lines | {::nomarkdown} N I,X,IEN<br/> S I=0,X="" F  S X=$O(^FH(119.4,"B",X)) Q:X=""  S IEN=$O(^(X,0)) D<br/> . I '$D(^FH(119.4,IEN,"I")) S I=I+1,LST(I)=IEN_U_X{:/}




 Generated on January 13th 2017, 7:15:27 am