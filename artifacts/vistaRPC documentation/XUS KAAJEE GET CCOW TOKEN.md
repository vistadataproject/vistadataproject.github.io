---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET CCOW TOKEN 

 property | value 
--- | --- 
 label | XUS KAAJEE GET CCOW TOKEN
 tag | CCOWIP
 routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
 return value type | ARRAY
 description | This RPC gets a token to save in the CCOW context to aid in sign-on

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IP-ADDRESS | LITERAL | 30 | true | This value represents the IP address of the workstation.  Useful for J2EEapplications that connect to VistA via the application server. If present,this value will be used when associating a CCOW token to the IPaddress of the client workstation | 