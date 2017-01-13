---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT PTINQ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT PTINQ{:/}
 tag | {::nomarkdown}PTINQ{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns formatted patient inquiry text for display in GUI environment.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return formatted pt inquiry report
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} K ^TMP("ORDATA",$J,1)<br/> D DGINQ^ORCXPND1(DFN)<br/> S REF=$NA(^TMP("ORDATA",$J,1))```{:/}




 Generated on January 13th 2017, 7:11:26 am