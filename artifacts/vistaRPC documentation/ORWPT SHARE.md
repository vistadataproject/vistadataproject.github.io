---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT SHARE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SHARE{:/}
 tag | {::nomarkdown}SHARE{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Set global to share DFN with other applications
 Input Parameters | {::nomarkdown}IP<br/>HWND<br/>DFN{:/}
 Lines | ```
 K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)
 K ^TMP("ORWDXMQ",$J)
 S ^TMP("ORWCHART",$J,IP,HWND)=DFN```




 Generated on January 13th 2017, 6:55:29 am