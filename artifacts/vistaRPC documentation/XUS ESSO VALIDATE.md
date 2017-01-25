---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS ESSO VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS ESSO VALIDATE{:/}
 tag | {::nomarkdown}ESSO{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API/RPC uses the VA Identity and Access Management (IAM) SAML tokendefinition version 1.2 attributes from a SAML token for user sign-on.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input:   DOC = Closed reference to global root containing XML document                (loaded STS SAML Token). See $$EN^MXMLDOM instructions in               the VistA Kernel Developers Guide for required format of               the DOC global.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}