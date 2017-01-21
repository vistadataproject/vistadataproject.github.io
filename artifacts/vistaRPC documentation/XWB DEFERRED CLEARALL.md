---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB DEFERRED CLEARALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB DEFERRED CLEARALL{:/}
 tag | {::nomarkdown}CLEARALL{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to CLEAR all the data known to this job in the ^XTMPglobal.  Makes use of the list in ^TMP(\XWBHDL\,$J,handle).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLEARALL^[XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 Method comment | Clear ALL the data for this job.
 Code | {::nomarkdown}  N X<br> S X="" F  S X=$O(^TMP("XWBHDL",$J,X)) Q:X=""  D CLEAR(.RET,X){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}