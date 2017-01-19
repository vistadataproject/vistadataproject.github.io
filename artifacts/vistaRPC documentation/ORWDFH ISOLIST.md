---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH ISOLIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ISOLIST{:/}
 tag | {::nomarkdown}ISOLIST{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active Isolation/Precaution Type (file #119.4) entries.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISOLIST^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return list of active isolations/precautions
 Code | {::nomarkdown}  N I,X,IEN<br> S I=0,X="" F  S X=$O(^FH(119.4,"B",X)) Q:X=""  S IEN=$O(^(X,0)) D<br> . I '$D(^FH(119.4,IEN,"I")) S I=I+1,LST(I)=IEN_U_X{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}