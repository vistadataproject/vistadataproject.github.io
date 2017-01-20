---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS KEY CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS KEY CHECK{:/}
 tag | {::nomarkdown}OWNSKEY{:/}
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API will check if the user (DUZ) holds a security key or an array ofkeys.If a single security KEY is sent the result is returned in R(0).If an array is sent down then the return array has the same order as thecalling array.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}KEY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If key is a single value it holds the one key to check.If key is an array then the result is an array that matches the keylist with values that match the status of the key check for each key.The return is a 1 if the user has the key and 0 if not.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}