---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SVONLY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SVONLY{:/}
 tag | {::nomarkdown}SVONLY{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Prints service copies only (used when user says \Don't Print\ for theother copies).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SVONLY^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | print service copies only
 Input parameters | {::nomarkdown}HLOC<br>PRTLST{:/}
 Code | {::nomarkdown}  Q:$G(A7RNDBI)  ; per NDBI, to suppress prints during integration<br> N TMPLST,I,J<br> S HLOC=+HLOC_";SC(",OK=1<br> S I="",J=0 F  S I=$O(PRTLST(I)) Q:I'>0  D<br> . I ($L(PRTLST(I),U)>1),'$P(PRTLST(I),U,5) Q<br> . S J=J+1,TMPLST(J)=$P(PRTLST(I),U)<br> I $D(TMPLST)>1 D GUI^ORPR02(.TMPLST,"","S",HLOC)<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}