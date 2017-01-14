---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC ACTIVE USER 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ACTIVE USER{:/}
 tag | {::nomarkdown}ACT{:/}
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will determine if a user (DUZ value) is valid and is active.  Also, additionally screening logic can be passed in to validate a user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer value to the NEW PERSON file.{:/} | 
| {::nomarkdown}DSISCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}You may pass additional screening criteria to be checked.  For a user to be returned, all screening criteria must be true in addition to being Active. Allowable formats of DSISCR(n) = flag^val1^val2^val3^..  check for security key    KEY^security key name  check for parameter      PARM^ parameter name^parameter instance  execute M code    M^<return message>^<executable M code which sets $T>{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}