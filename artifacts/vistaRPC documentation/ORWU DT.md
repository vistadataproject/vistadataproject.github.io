---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU DT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DT{:/}
 tag | {::nomarkdown}DT{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns date in internal VA FileMan format.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DT^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Internal Fileman Date/Time
 First comment | {::nomarkdown}change the '00:00' that could be passed so Fileman doesn't reject{:/}
 Input parameters | {::nomarkdown}X<br/>%DT{:/}
 Code | ```  I $L($P(X,"@",2)),("00000000"[$TR($P(X,"@",2),":","")) S $P(X,"@",2)="00:00:01"<br/> S %DT=$G(%DT,"TS") D ^%DT K %DT```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}