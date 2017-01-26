---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV ACTIVE USER LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ACTIVE USER LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return a list of active users matching the lookup value. You can pass in additional screening logic if so desired, such as security keys.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the lookup value to find matches in file 200.{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This RPC will return a list of active users. You may wish additional screening to occur. For example, return all active users matching SMITHwho also own a particular security key.  Acceptable format of SCR():   SCR(n) = KEY^<security key name>   SCR(n) = PARM^<parameter name>^<parameter instance>   SCR(n) = M^<return text>^<executable M code that sets $T>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}