---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST GENERIC DRUGS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST GENERIC DRUGS{:/}
 tag | {::nomarkdown}GDLIST{:/}
 routine | [RORRP035](http://code.osehra.org/dox/Routine_RORRP035_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST GENERIC DRUGS remote procedure returns a list of genericdrugs, which are referenced by the ROR GENERIC DRUG file (#799.51).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If this parameter is defined and not zero, it should contain a valid codeof the Drug Group. In this case, only the drugs associated with this groupwill be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}