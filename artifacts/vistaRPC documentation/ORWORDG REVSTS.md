---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORDG REVSTS 

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

 Leading comment lines | {::nomarkdown}N I,X,T S ILST=0
F I=1:1 S T="ORDSTS+"_I_"^ORCHANG2" S X=$T(@T) Q:$P(X,";",4)="ZZZZ"  D
. S ILST=ILST+1,LST(ILST)=$P(X,";",3)_U_$P(X,";",4){:/}




 Generated on January 13th 2017, 6:15:57 am