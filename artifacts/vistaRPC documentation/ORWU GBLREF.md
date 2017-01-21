---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU GBLREF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU GBLREF{:/}
 tag | {::nomarkdown}GBLREF{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the global reference for a particular file number.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GBLREF^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return global reference for file number
 Input parameters | {::nomarkdown}FN{:/}
 Code | {::nomarkdown}  S VAL="" Q:'FN<br> S VAL=$$ROOT^DILFD(+FN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}