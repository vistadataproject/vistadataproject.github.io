---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS GET VISITOR 

 property | value 
--- | --- 
 label | XUS GET VISITOR
 tag | GETVISIT
 routine | [XUSBSE1](http://code.osehra.org/dox/Routine_XUSBSE1_source.html)
 return value type | SINGLE VALUE
 description | This controlled-subscription RPC is used by the Broker Security Enhancement to check a user's credentials based on a BSE TOKEN that waspassed to identify and authenticate a visiting user. The remote VistAsystem calls this RPC on the authenticating VistA system to validate ifthe visiting user is permitted to visit, and if so, obtain theauthenticated user's demographics.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TOKEN | LITERAL |  | true |  | 