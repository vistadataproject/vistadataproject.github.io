---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS KAAJEE LOGOUT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS KAAJEE LOGOUT{:/}
 tag | {::nomarkdown}SIGNOFF{:/}
 routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC calls the LOUT^XUSCLEAN tag to mark a KAAJEE-signed-on user'sentry in the sign-on log as signed off.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SIGNON-LOG-DA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DA (IEN) of the user's signon log entry.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}