---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS ESSO VALIDATE 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS ESSO VALIDATE{:/}
 tag | {::nomarkdown}ESSO{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API/RPC uses the VA Identity and Access Management (IAM) SAML tokendefinition version 1.2 attributes from a SAML token for user sign-on.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input:   DOC = Closed reference to global root containing XML document                (loaded STS SAML Token). See $$EN^MXMLDOM instructions in               the VistA Kernel Developers Guide for required format of               the DOC global.{:/} | 




 Generated on January 13th 2017, 7:11:27 am