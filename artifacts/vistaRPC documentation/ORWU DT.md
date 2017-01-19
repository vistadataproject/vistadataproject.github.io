---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU DT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DT{:/}
 tag | {::nomarkdown}DT{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns date in internal VA FileMan format.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DT^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Internal Fileman Date/Time
 First comment | {::nomarkdown}<pre> change the '00:00' that could be passed so Fileman doesn't reject</pre>{:/}
 Input parameters | {::nomarkdown}X<br>%DT{:/}
 Code | {::nomarkdown}  I $L($P(X,"@",2)),("00000000"[$TR($P(X,"@",2),":","")) S $P(X,"@",2)="00:00:01"<br> S %DT=$G(%DT,"TS") D ^%DT K %DT{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}