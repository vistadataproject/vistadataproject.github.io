---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR ABBSPEC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR ABBSPEC{:/}
 tag | {::nomarkdown}ABBSPEC{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns lab specimens that have an abbreviation (used as default list).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Lines | ```
 N X,IEN,ILST S ILST=0
 S X="" F  S X=$O(^LAB(61,"E",X)) Q:X=""  S IEN=$O(^(X,0)) D
 . S LST($$NXT)=IEN_U_$P(^LAB(61,IEN,0),U,1)```
 Leading comment lines | {::nomarkdown}returns specimens with abbreviation (uses 'E' xref){:/}




 Generated on January 13th 2017, 6:55:28 am