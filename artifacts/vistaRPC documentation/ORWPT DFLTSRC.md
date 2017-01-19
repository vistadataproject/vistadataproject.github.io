---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DFLTSRC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DFLTSRC{:/}
 tag | {::nomarkdown}DFLTSRC{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return user's default patient list source.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DFLTSRC^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return default patient list source (T, W, C, P, S)
 Code | {::nomarkdown}  N SRV S SRV=+$G(^VA(200,DUZ,5))<br> S VAL=$$GET^XPAR("ALL^SRV.`"_SRV,"ORLP DEFAULT LIST SOURCE"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}