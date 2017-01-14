---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGN AUTHUSR 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN AUTHUSR{:/}
 tag | {::nomarkdown}AUTHUSR{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | AUTHUSR^[ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 Method comment | Does user has permission to access GN?
 Code | ```  S ORY=0<br/> I $D(^XUSEC("OR GN ACCESS",DUZ)) S ORY=1```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}