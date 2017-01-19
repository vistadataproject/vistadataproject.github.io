---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU PATCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU PATCH{:/}
 tag | {::nomarkdown}PATCH{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if the specified patch is installed on the system, otherwisereturns a 0.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PATCH^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return 1 if patch X is installed
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  S VAL=$$PATCH^XPDUTL(X){:/}


### CPRS

[rMisc.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}