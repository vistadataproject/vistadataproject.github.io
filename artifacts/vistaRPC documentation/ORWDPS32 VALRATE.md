---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALRATE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALRATE{:/}
 tag | {::nomarkdown}VALRATE{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return a 1 if IV rate text is valid, otherwise return 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return "1" (true) if IV rate text is valid
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```{::nomarkdown} I $E($RE($$UPPER^ORWDPS32(X)),1,5)="RH/LM"  S X=$E(X,1,$L(X)-5)<br/> S X=$$TRIM^ORWDPS32(X)<br/> D ORINF^PSIVSP S VAL=$G(X) ;S OK=$S($D(X):1,1:0)```{:/}




 Generated on January 13th 2017, 7:11:26 am