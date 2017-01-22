---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPO CSLABD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPO CSLABD{:/}
 tag | {::nomarkdown}CSLABD{:/}
 routine | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CSLABD^[ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}<pre> get lab defaults</pre>{:/}
 Code | {::nomarkdown}  N RNG<br> S INFO=""<br> F RNG="INPT","OUTPT" D<br> .S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQLR DATE RANGE "_RNG,1,"I")_U{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}