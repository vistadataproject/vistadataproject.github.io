---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 APPROVAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 APPROVAL{:/}
 tag | {::nomarkdown}APPROVAL{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | APPROVAL^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | RETURNS LIST OF RADIOLOGISTS WHO MAY APPROVE A
 First comment | {::nomarkdown}                       PROCEDURE WHEN REQUIRED{:/}
 Input parameters | {::nomarkdown}DUMMY{:/}
 Code | {::nomarkdown}  N ORX,I<br> S I="" F  S I=$O(^VA(200,"ARC","S",I)) Q:I=""  D<br> . ;I $P($G(^VA(200,I,"PS")),U,4),$P(^VA(200,I,"PS"),U,4)'>DT Q<br> . I '$$ACTIVE^XUSER(I) Q<br> . I $P($G(^VA(200,I,"RA")),U,3),$P(^VA(200,I,"RA"),U,3)'>DT Q<br> . S ORX=$P($G(^VA(200,I,0)),U)<br> . S Y(I)=I_U_ORX{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}