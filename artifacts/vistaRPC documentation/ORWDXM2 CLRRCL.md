---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM2 CLRRCL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM2 CLRRCL{:/}
 tag | {::nomarkdown}CLRRCL{:/}
 routine | [ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Clear ORECALL.  Used by CPRS GUI to clean up ^TMP(\ORECALL\,$J) and^TMP(\ORWDXMQ\,$J).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | clear ORECALL
 Lines | ```
 S OK=1
 K ^TMP("ORECALL",$J),^TMP("ORWDXMQ",$J)```




 Generated on January 13th 2017, 6:55:29 am