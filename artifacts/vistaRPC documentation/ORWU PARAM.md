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

 property | value 
 --- | --- 
 Method | PARAM^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return a parameter value for a user
 First comment | {::nomarkdown}call assumes current user, default entities, single instance{:/}
 Input parameters | {::nomarkdown}APARAM{:/}
 Code | {::nomarkdown}  S VAL=$$GET^XPAR("ALL",APARAM,1,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}