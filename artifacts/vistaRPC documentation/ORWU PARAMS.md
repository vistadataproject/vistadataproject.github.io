---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU PARAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU PARAMS{:/}
 tag | {::nomarkdown}PARAMS{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Simple call to return a list of parameter values such as:         INST1^VALUE1        INST2^VALUE2        ...        INSTN^VALUEN The call assumes the current user, 'defaultable' entities and multiple instances.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PARAMS^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return a list of parameter values
 First comment | {::nomarkdown}call assumes current user, default entities, multiple instances{:/}
 Input parameters | {::nomarkdown}APARAM{:/}
 Code | {::nomarkdown}  D GETLST^XPAR(.ORLIST,"ALL",APARAM,"Q"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}