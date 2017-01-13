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
 Lines | ```{::nomarkdown} N I,X<br/> D FIND^DIC(2,"","","M",FROM)<br/> S I=0,Y=""<br/> F  S I=$O(^TMP("DILIST",$J,1,I)) Q:'I  D<br/> . S X=^TMP("DILIST",$J,"ID",I,.09)<br/> . S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br/> . S Y(I)=^TMP("DILIST",$J,2,I)_"^"_^TMP("DILIST",$J,1,I)_"^"_X<br/> K ^TMP("DILIST",$J)```{:/}




 Generated on January 13th 2017, 7:11:26 am