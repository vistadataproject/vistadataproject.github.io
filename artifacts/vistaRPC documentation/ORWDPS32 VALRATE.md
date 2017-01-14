---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALRATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALRATE{:/}
 tag | {::nomarkdown}VALRATE{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return a 1 if IV rate text is valid, otherwise return 0.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VALRATE^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return "1" (true) if IV rate text is valid
 Input parameters | {::nomarkdown}X{:/}
 Code | ```  I $E($RE($$UPPER^ORWDPS32(X)),1,5)="RH/LM"  S X=$E(X,1,$L(X)-5)
 S X=$$TRIM^ORWDPS32(X)
 D ORINF^PSIVSP S VAL=$G(X) ;S OK=$S($D(X):1,1:0)```




 Generated on January 14th 2017, 7:26:35 am