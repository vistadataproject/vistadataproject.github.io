---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC ACTIVE USER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ACTIVE USER LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return a list of active users matching the lookup value.  You can pass in additional screening logic if so desired, such as security keys. It is the programmers responsibility to ensure that the total length of the date returned in each return value does not exceed 250 characters.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the lookup value to find matches in file 200{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This RPC will return a list of active users.  You may wish additional screening to occur.  For example, return all active users matching SMITH who also own a particular security key.  Acceptable format of SCR():  SCR(n) = KEY^<security key name>  SCR(n) = PARM^<parameter name>^<parameter instance>  SCR(n) = M^<return text>^<executable M code that sets $T>{:/} | 




 Generated on January 13th 2017, 7:11:27 am