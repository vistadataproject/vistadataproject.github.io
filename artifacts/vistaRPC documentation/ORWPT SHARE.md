---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT SHARE 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SHARE{:/}
 tag | {::nomarkdown}SHARE{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SHARE^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Set global to share DFN with other applications
 Input parameters | {::nomarkdown}IP<br/>HWND<br/>DFN{:/}
 Code | ```  K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)<br/> K ^TMP("ORWDXMQ",$J)<br/> S ^TMP("ORWCHART",$J,IP,HWND)=DFN```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}