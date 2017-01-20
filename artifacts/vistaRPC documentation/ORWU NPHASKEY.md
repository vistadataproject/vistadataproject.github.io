---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU NPHASKEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU NPHASKEY{:/}
 tag | {::nomarkdown}NPHASKEY{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if a specified user holds a specified key, otherwise returns0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NPHASKEY^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns TRUE if the person has the security key
 Input parameters | {::nomarkdown}NP<br>KEY{:/}
 Code | {::nomarkdown}  S VAL=''$D(^XUSEC(KEY,NP)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}