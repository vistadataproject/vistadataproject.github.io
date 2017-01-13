---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA WCPUT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA WCPUT{:/}
 tag | {::nomarkdown}WCPUT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set ward comments for an order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Set ward comments
 Input Parameters | {::nomarkdown}ORID<br/>WCLST{:/}
 Lines | ```{::nomarkdown} N DIERR,ERRLST,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br/> D WP^DIE(100.008,ACT_","_ORIFN_",",50,"","WCLST","ERRLST")<br/> S ERR="" I $D(DIERR) S ERR="An error occurred while saving comments."```{:/}




 Generated on January 13th 2017, 7:11:26 am