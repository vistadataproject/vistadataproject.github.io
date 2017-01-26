---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM2 CLRRCL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM2 CLRRCL{:/}
 tag | {::nomarkdown}CLRRCL{:/}
 routine | [ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Clear ORECALL.  Used by CPRS GUI to clean up ^TMP(\ORECALL\,$J) and^TMP(\ORWDXMQ\,$J).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLRRCL^[ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html)
 Method comment | clear ORECALL
 Code | {::nomarkdown}  S OK=1<br> K ^TMP("ORECALL",$J),^TMP("ORWDXMQ",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}