---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR ABBSPEC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR ABBSPEC{:/}
 tag | {::nomarkdown}ABBSPEC{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns lab specimens that have an abbreviation (used as default list).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ABBSPEC^[ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}<pre> returns specimens with abbreviation (uses 'E' xref)</pre>{:/}
 Code | {::nomarkdown}  N X,IEN,ILST S ILST=0<br> S X="" F  S X=$O(^LAB(61,"E",X)) Q:X=""  S IEN=$O(^(X,0)) D<br> . S LST($$NXT)=IEN_U_$P(^LAB(61,IEN,0),U,1){:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}