---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCRP QUERY VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCRP QUERY VALIDATE{:/}
 tag | {::nomarkdown}VALID{:/}
 routine | [SCRPBK4](http://code.osehra.org/dox/Routine_SCRPBK4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will validate the criteria specified in thequery template definiton passed in as part of the call.The validation checks the criteria against what datais required the report assoicated with the template.If the validation check fails, then the errors foundare returned as part of the RPC, otherwise a successflag(1) is returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUERY DEFINITION{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.{:/} | 
| {::nomarkdown}VALIDATE MODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates whether all validation checksneed to be made(FULL) or only those checks related toentity entry selection(SELECTIONS) should be made.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}