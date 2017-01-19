---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA WCPUT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA WCPUT{:/}
 tag | {::nomarkdown}WCPUT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set ward comments for an order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | WCPUT^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Set ward comments
 Input parameters | {::nomarkdown}ORID<br>WCLST{:/}
 Code | {::nomarkdown}  N DIERR,ERRLST,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br> D WP^DIE(100.008,ACT_","_ORIFN_",",50,"","WCLST","ERRLST")<br> S ERR="" I $D(DIERR) S ERR="An error occurred while saving comments."{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}