---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT PTINQ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT PTINQ{:/}
 tag | {::nomarkdown}PTINQ{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns formatted patient inquiry text for display in GUI environment.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PTINQ^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return formatted pt inquiry report
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  K ^TMP("ORDATA",$J,1)<br> D DGINQ^ORCXPND1(DFN)<br> S REF=$NA(^TMP("ORDATA",$J,1)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}