---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET VISITOR 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET VISITOR{:/}
 tag | {::nomarkdown}GETVISIT{:/}
 routine | [XUSBSE1](http://code.osehra.org/dox/Routine_XUSBSE1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This controlled-subscription RPC is used by the Broker Security Enhancement to check a user's credentials based on a BSE TOKEN that waspassed to identify and authenticate a visiting user. The remote VistAsystem calls this RPC on the authenticating VistA system to validate ifthe visiting user is permitted to visit, and if so, obtain theauthenticated user's demographics.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TOKEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:15:28 am