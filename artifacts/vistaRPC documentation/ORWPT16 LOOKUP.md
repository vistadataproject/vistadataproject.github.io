---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 LOOKUP{:/}
 tag | {::nomarkdown}LOOKUP{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of patient names
 Input Parameters | {::nomarkdown}FROM{:/}
 Lines | ```
 N I,X
 D FIND^DIC(2,"","","M",FROM)
 S I=0,Y=""
 F  S I=$O(^TMP("DILIST",$J,1,I)) Q:'I  D
 . S X=^TMP("DILIST",$J,"ID",I,.09)
 . S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)
 . S Y(I)=^TMP("DILIST",$J,2,I)_"^"_^TMP("DILIST",$J,1,I)_"^"_X
 K ^TMP("DILIST",$J)```




 Generated on January 13th 2017, 6:55:28 am