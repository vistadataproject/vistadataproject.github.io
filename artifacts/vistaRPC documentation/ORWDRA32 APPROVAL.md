---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDRA32 APPROVAL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 APPROVAL{:/}
 tag | {::nomarkdown}APPROVAL{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | APPROVAL^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | RETURNS LIST OF RADIOLOGISTS WHO MAY APPROVE A
 First comment | {::nomarkdown}PROCEDURE WHEN REQUIRED{:/}
 Input parameters | {::nomarkdown}DUMMY{:/}
 Code | ```  N ORX,I
 S I="" F  S I=$O(^VA(200,"ARC","S",I)) Q:I=""  D
 . ;I $P($G(^VA(200,I,"PS")),U,4),$P(^VA(200,I,"PS"),U,4)'>DT Q
 . I '$$ACTIVE^XUSER(I) Q
 . I $P($G(^VA(200,I,"RA")),U,3),$P(^VA(200,I,"RA"),U,3)'>DT Q
 . S ORX=$P($G(^VA(200,I,0)),U)
 . S Y(I)=I_U_ORX```




 Generated on January 14th 2017, 7:26:35 am