---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GAFURL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GAFURL{:/}
 tag | {::nomarkdown}GAFURL{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the GAF Scale Rating Form URL{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns the MH GAF Web Page URL
 Lines | {::nomarkdown} S URL=""<br/> I $T(GAFURL^YTAPI5)'="" D<br/> .N ORY<br/> .D GAFURL^YTAPI5(.ORY)<br/> .I $G(ORY(1))="[DATA]" S URL=$G(ORY(2)){:/}




 Generated on January 13th 2017, 7:15:27 am