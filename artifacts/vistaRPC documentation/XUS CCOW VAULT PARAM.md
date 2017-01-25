---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS CCOW VAULT PARAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS CCOW VAULT PARAM{:/}
 tag | {::nomarkdown}CCOWPC{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a value for use with the CCOW vault.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CCOWPC^[XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 Method comment | Return ap
 Code | {::nomarkdown}  N I,XU4<br> S RET(0)="" I '$$BROKER^XWBLIB Q<br> D GETLST^XPAR(.XU4,"SYS","XUS CCOW VAULT PARAM","Q")<br> F I=0,1 S RET(I)=$P($G(XU4(I+1)),"^",2,99){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} Executable Only <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}