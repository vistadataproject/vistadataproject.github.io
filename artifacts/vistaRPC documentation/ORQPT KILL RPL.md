---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT KILL RPL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT KILL RPL{:/}
 tag | {::nomarkdown}RPLCLEAN{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is passed a ^TMP file root and $J(job number) and kills the ^TMP(\ORRPL\,$J globaldata based on the passed file root w/job number.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPLCLEAN^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | Kill global data using passed global root value.
 First comment | {::nomarkdown}<pre><br/> Variables used:<br/><br/>    ORJ    = Job number to use in ^TMP global root.<br/>    ORROOT = Root of ^TMP global to kill.<br/>    Y      = Returned RPC value.<br/></pre>{:/}
 Input parameters | {::nomarkdown}ORJ{:/}
 Code | {::nomarkdown}  N ORROOT<br> S Y=1                                     ; Initialize.<br> S ORROOT="^TMP("_"""ORRPL"""_","          ; Initial setting.<br> S ORROOT=ORROOT_ORJ_","_"""B"""_")"       ; Add rest.<br> K @ORROOT                                 ; Kill global data.<br>{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}