---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ABBSPEC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ABBSPEC{:/}
 tag | {::nomarkdown}ABBSPEC{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of lab specimens with abbreviations.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Lines | {::nomarkdown} N X,IEN,ILST S ILST=0<br/> S X="" F  S X=$O(^LAB(61,"E",X)) Q:X=""  S IEN=$O(^(X,0)) D<br/> . S LST($$NXT)=IEN_U_$P(^LAB(61,IEN,0),U,1){:/}
 Leading comment lines | {::nomarkdown}returns specimens with abbreviation (uses 'E' xref){:/}




 Generated on January 13th 2017, 7:15:27 am