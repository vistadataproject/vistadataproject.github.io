---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP QUERY VALIDATE 

 property | value 
--- | --- 
 label | SCRP QUERY VALIDATE
 tag | VALID
 routine | [SCRPBK4](http://code.osehra.org/dox/Routine_SCRPBK4_source.html)
 return value type | ARRAY
 description | This RPC will validate the criteria specified in thequery template definiton passed in as part of the call.The validation checks the criteria against what datais required the report assoicated with the template.If the validation check fails, then the errors foundare returned as part of the RPC, otherwise a successflag(1) is returned.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client. | 
| vs:Input_Parameter-8994_02 | VALIDATE MODE | LITERAL | 50 | true | This parameter indicates whether all validation checksneed to be made(FULL) or only those checks related toentity entry selection(SELECTIONS) should be made. | 