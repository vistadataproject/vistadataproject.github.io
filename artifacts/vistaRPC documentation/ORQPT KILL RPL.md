---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT KILL RPL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT KILL RPL{:/}
 tag | {::nomarkdown}RPLCLEAN{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is passed a ^TMP file root and $J(job number) and kills the ^TMP(\ORRPL\,$J globaldata based on the passed file root w/job number.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Kill global data using passed global root value.
 Leading comment lines | {::nomarkdown}Variables used:<br/>ORJ    = Job number to use in ^TMP global root.<br/>ORROOT = Root of ^TMP global to kill.<br/>Y      = Returned RPC value.{:/}




 Generated on January 13th 2017, 6:24:32 am