---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XWB DEFERRED CLEARALL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}XWB DEFERRED CLEARALL{:/}
 tag | {::nomarkdown}CLEARALL{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to CLEAR all the data known to this job in the ^XTMPglobal.  Makes use of the list in ^TMP(\XWBHDL\,$J,handle).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CLEARALL^[XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 Method comment | Clear ALL the data for this job.
 Code | ```  N X
 S X="" F  S X=$O(^TMP("XWBHDL",$J,X)) Q:X=""  D CLEAR(.RET,X)```




 Generated on January 14th 2017, 7:26:35 am