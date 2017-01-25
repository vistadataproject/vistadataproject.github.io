---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU PARAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU PARAM{:/}
 tag | {::nomarkdown}PARAM{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Simple call to return a parameter value.  The call assumes the currentuser, 'defaultable' entities, and one instance.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PARAM^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return a parameter value for a user
 Input parameters | {::nomarkdown}APARAM{:/}
 First comment | {::nomarkdown}<pre> call assumes current user, default entities, single instance</pre>{:/}
 Code | {::nomarkdown}  S VAL=$$GET^XPAR("ALL",APARAM,1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}