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

 Property | Value 
 --- | --- 
 Method | ISOLIST^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return list of active isolations/precautions
 Code | {::nomarkdown}  N I,X,IEN<br> S I=0,X="" F  S X=$O(^FH(119.4,"B",X)) Q:X=""  S IEN=$O(^(X,0)) D<br> . I '$D(^FH(119.4,IEN,"I")) S I=I+1,LST(I)=IEN_U_X{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}