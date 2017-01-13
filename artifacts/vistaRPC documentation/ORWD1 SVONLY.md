---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SVONLY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SVONLY{:/}
 tag | {::nomarkdown}SVONLY{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Prints service copies only (used when user says \Don't Print\ for theother copies).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | print service copies only
 Input Parameters | {::nomarkdown}HLOC<br/>PRTLST{:/}
 Lines | ```
 Q:$G(A7RNDBI)  ; per NDBI, to suppress prints during integration
 N TMPLST,I,J
 S HLOC=+HLOC_";SC(",OK=1
 S I="",J=0 F  S I=$O(PRTLST(I)) Q:I'>0  D
 . I ($L(PRTLST(I),U)>1),'$P(PRTLST(I),U,5) Q
 . S J=J+1,TMPLST(J)=$P(PRTLST(I),U)
 I $D(TMPLST)>1 D GUI^ORPR02(.TMPLST,"","S",HLOC)
```




 Generated on January 13th 2017, 6:55:29 am