---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LEGACY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LEGACY{:/}
 tag | {::nomarkdown}LEGACY{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns message if patient has data on a legacy system.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LEGACY^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return message if data on the legacy system
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> ORLST(0)=1 if data,  ORLST(n)=display message if data</pre>{:/}
 Code | {::nomarkdown}  S ORLST(0)=0<br> I $L($T(HXDATA^A7RDPAGU)) D<br> . D HXDATA^A7RDPAGU(.ORLST,DFN)<br> . I $O(ORLST(0)) S ORLST(0)=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}