---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLRR INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR INFO{:/}
 tag | {::nomarkdown}INFO{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return lab test description information.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | INFO^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Get Lab test description info
 Input parameters | {::nomarkdown}ORTEST{:/}
 Code | {::nomarkdown}  I '$L($T(ONE^LR7OR4)) S ORY(1)="Missing lab API (part of patch LR*5.2*256)" Q<br> D ONE^LR7OR4(.ORY,.ORTEST){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}