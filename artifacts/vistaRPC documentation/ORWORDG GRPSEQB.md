---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG GRPSEQB 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG GRPSEQB{:/}
 tag | {::nomarkdown}GRPSEQB{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns expanded list of display groups.for the current site/user.{:/}


### Method description

 property | value 
 --- | --- 
 Lines | ```{::nomarkdown} N C,I,X<br/> D GRPSEQ(.X)<br/> S C=0,I=0<br/> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_U_X(I)```{:/}
 Leading comment lines | {::nomarkdown}Call GRPSEQ, format for broker:<br/>Y(n)=Ptr to Display Group ^ Sequence ^ Top Level Display Group Name{:/}




 Generated on January 13th 2017, 7:11:26 am