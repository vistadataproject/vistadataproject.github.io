---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU PARAM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU PARAM{:/}
 tag | {::nomarkdown}PARAM{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Simple call to return a parameter value.  The call assumes the currentuser, 'defaultable' entities, and one instance.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return a parameter value for a user
 Input Parameters | {::nomarkdown}APARAM{:/}
 Lines | ```{::nomarkdown} S VAL=$$GET^XPAR("ALL",APARAM,1,"I")```{:/}
 Leading comment lines | {::nomarkdown}call assumes current user, default entities, single instance{:/}




 Generated on January 13th 2017, 7:11:27 am