---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ACTIVE USER LIST 

 property | value 
--- | --- 
 label | DSIV ACTIVE USER LIST
 tag | LIST
 routine | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
 return value type | GLOBAL ARRAY
 description | This will return a list of active users matching the lookup value. You can pass in additional screening logic if so desired, such as security keys.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL | LITERAL | 50 | true | This is the lookup value to find matches in file 200. | 
| SCR | LIST | 250 | true | This RPC will return a list of active users. You may wish additional screening to occur. For example, return all active users matching SMITHwho also own a particular security key.  Acceptable format of SCR():   SCR(n) = KEY^<security key name>   SCR(n) = PARM^<parameter name>^<parameter instance>   SCR(n) = M^<return text>^<executable M code that sets $T> | 