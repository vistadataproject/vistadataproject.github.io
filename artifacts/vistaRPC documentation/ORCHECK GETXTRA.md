---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK GETXTRA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETXTRA{:/}
 tag | {::nomarkdown}GETXTRA{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETXTRA^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | get extra text for an order check
 First comment | {::nomarkdown}<pre>^TMP($J,"ORK XTRA TXT") stores the text of order checks that are longer than a single line (reminder order checks)</pre>{:/}
 Input parameters | {::nomarkdown}ORGL<br>ORRULE{:/}
 Code | {::nomarkdown}  Q:'$D(^TMP($J,"ORK XTRA TXT",ORGL,ORRULE))<br> M ORY=^TMP($J,"ORK XTRA TXT",ORGL,ORRULE)<br>{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}