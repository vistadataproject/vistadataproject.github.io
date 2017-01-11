---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REMOTE 

 property | value 
--- | --- 
 label | ORWRP PRINT LAB REMOTE
 tag | REMOTE
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | SINGLE VALUE
 description |  This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid


### Method description

 property | value 
--- | --- 
 Method comment | Print data for remote sites
 Leading comment lines | RPC: ORWRP PRINT REMOTE REPORT