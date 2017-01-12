---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; GMV MARK ERROR 

 property | value 
--- | --- 
 name | GMV MARK ERROR
 domain | Vital
 description | {::nomarkdown}This remote procedure call marks a selected vitals record in the GMRV<br/>Vital Measurement (#120.5) file as entered-in-error.<br/> <br/>This remote procedure call is documented in Integration Agreement 4414.{:/}
 Native VISTA Description | [nodeVISTA 8994](../vistaRPC documentation/GMV MARK ERROR)
 MUMPS implementation | [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL | true | {::nomarkdown}GMVDATA contains the following information:<br/> <br/> piece1^piece2^piece3<br/> <br/> where piece1 = FILE 120.5 IEN <br/>       piece2 = FILE 200 IEN (i.e., DUZ)<br/>       piece3 = A single value to indicate the reason for the error.<br/>                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =<br/>                INCORRECT PATIENT and 4 = INVALID RECORD{:/} |  | 




 Generated on January 12th 2017, 6:57:40 am