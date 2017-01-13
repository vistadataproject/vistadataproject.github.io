---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG REVSTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG REVSTS{:/}
 tag | {::nomarkdown}REVSTS{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the status flags available for review orders action.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return the status flags available for review orders
 Lines | {::nomarkdown} D STSLST^ORCHANG2(.LST){:/}
 Leading comment lines | {::nomarkdown}N I,X,T S ILST=0<br/>F I=1:1 S T="ORDSTS+"_I_"^ORCHANG2" S X=$T(@T) Q:$P(X,";",4)="ZZZZ"  D<br/>. S ILST=ILST+1,LST(ILST)=$P(X,";",3)_U_$P(X,";",4){:/}




 Generated on January 13th 2017, 7:15:27 am