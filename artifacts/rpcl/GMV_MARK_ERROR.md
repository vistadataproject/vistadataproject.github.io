---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> GMV MARK ERROR 

 property | value 
--- | --- 
 name | GMV MARK ERROR
 description | This remote procedure call marks a selected vitals record in the GMRV\rVital Measurement (#120.5) file as entered-in-error.\r \rThis remote procedure call is documented in Integration Agreement 4414.
 MUMPS implementation | EN1^GMVDCSAV
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL | true | GMVDATA contains the following information:\r \r piece1^piece2^piece3\r \r where piece1 = FILE 120.5 IEN \r       piece2 = FILE 200 IEN (i.e., DUZ)\r       piece3 = A single value to indicate the reason for the error.\r                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =\r                INCORRECT PATIENT and 4 = INVALID RECORD |  |  | 