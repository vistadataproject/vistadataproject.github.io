---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT SHARE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SHARE{:/}
 tag | {::nomarkdown}SHARE{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SHARE^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Set global to share DFN with other applications
 Input parameters | {::nomarkdown}IP<br>HWND<br>DFN{:/}
 Code | {::nomarkdown}  K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)<br> K ^TMP("ORWDXMQ",$J)<br> S ^TMP("ORWCHART",$J,IP,HWND)=DFN{:/}


### CPRS

[rMisc.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}