---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU DT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DT{:/}
 tag | {::nomarkdown}DT{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns date in internal VA FileMan format.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Internal Fileman Date/Time
 Input Parameters | {::nomarkdown}X<br/>%DT{:/}
 Lines | ```{::nomarkdown} I $L($P(X,"@",2)),("00000000"[$TR($P(X,"@",2),":","")) S $P(X,"@",2)="00:00:01"<br/> S %DT=$G(%DT,"TS") D ^%DT K %DT```{:/}
 Leading comment lines | {::nomarkdown}change the '00:00' that could be passed so Fileman doesn't reject{:/}




 Generated on January 13th 2017, 7:11:26 am