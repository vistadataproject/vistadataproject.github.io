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

 Property | Value 
 --- | --- 
 Method | PARAMS^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return a list of parameter values
 Input parameters | {::nomarkdown}APARAM{:/}
 First comment | {::nomarkdown}<pre> call assumes current user, default entities, multiple instances</pre>{:/}
 Code | {::nomarkdown}  D GETLST^XPAR(.ORLIST,"ALL",APARAM,"Q"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}