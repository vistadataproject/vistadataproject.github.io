---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DFLTSRC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DFLTSRC{:/}
 tag | {::nomarkdown}DFLTSRC{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return user's default patient list source.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return default patient list source (T, W, C, P, S)
 Lines | ```
 N SRV S SRV=+$G(^VA(200,DUZ,5))
 S VAL=$$GET^XPAR("ALL^SRV.`"_SRV,"ORLP DEFAULT LIST SOURCE")```




 Generated on January 13th 2017, 6:55:29 am