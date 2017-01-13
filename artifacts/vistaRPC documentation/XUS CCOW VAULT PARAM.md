---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS CCOW VAULT PARAM 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS CCOW VAULT PARAM{:/}
 tag | {::nomarkdown}CCOWPC{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a value for use with the CCOW vault.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return ap
 Lines | ```{::nomarkdown} N I,XU4<br/> S RET(0)="" I '$$BROKER^XWBLIB Q<br/> D GETLST^XPAR(.XU4,"SYS","XUS CCOW VAULT PARAM","Q")<br/> F I=0,1 S RET(I)=$P($G(XU4(I+1)),"^",2,99)```{:/}




 Generated on January 13th 2017, 7:11:27 am