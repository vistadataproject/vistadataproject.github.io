---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REMOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REMOTE{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Print data for remote sites
 Leading comment lines | RPC: ORWRP PRINT REMOTE REPORT




 Generated on January 13th 2017, 5:52:13 am