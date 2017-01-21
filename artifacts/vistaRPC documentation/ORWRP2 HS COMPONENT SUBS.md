---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMPONENT SUBS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMPONENT SUBS{:/}
 tag | {::nomarkdown}COMPSUB{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of ADHOC Health Summary subcomponents.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COMPSUB^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get subitems from a predefined Adhoc component
 Input parameters | {::nomarkdown}ORSUB{:/}
 Code | {::nomarkdown}  I '$L($T(COMPSUB^GMTSADH5)) Q<br> D COMPSUB^GMTSADH5(.ORY,ORSUB){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}