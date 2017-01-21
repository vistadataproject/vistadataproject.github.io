---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG GRPSEQB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG GRPSEQB{:/}
 tag | {::nomarkdown}GRPSEQB{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns expanded list of display groups.for the current site/user.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GRPSEQB^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 First comment | {::nomarkdown}<pre> Call GRPSEQ, format for broker:<br/>   Y(n)=Ptr to Display Group ^ Sequence ^ Top Level Display Group Name</pre>{:/}
 Code | {::nomarkdown}  N C,I,X<br> D GRPSEQ(.X)<br> S C=0,I=0<br> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_U_X(I){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}