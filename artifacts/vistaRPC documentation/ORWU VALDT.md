---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU VALDT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU VALDT{:/}
 tag | {::nomarkdown}VALDT{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates date/time entry and returns value of Y from %DT call.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | VALDT^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Validate date/time
 Input parameters | {::nomarkdown}X<br>%DT{:/}
 Code | {::nomarkdown}  S:'$D(%DT) %DT="TX" D ^%DT{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}