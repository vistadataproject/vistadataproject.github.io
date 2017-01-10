---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS ESSO VALIDATE 

 property | value 
--- | --- 
 label | XUS ESSO VALIDATE
 tag | ESSO
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | ARRAY
 description | This API/RPC uses the VA Identity and Access Management (IAM) SAML tokendefinition version 1.2 attributes from a SAML token for user sign-on.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DOC | LITERAL | 30 | true | Input:   DOC = Closed reference to global root containing XML document                (loaded STS SAML Token). See $$EN^MXMLDOM instructions in               the VistA Kernel Developers Guide for required format of               the DOC global. | 