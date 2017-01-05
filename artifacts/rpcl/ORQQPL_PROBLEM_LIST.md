---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQPL PROBLEM LIST 

 property | value 
--- | --- 
 name | ORQQPL PROBLEM LIST
 description | Problem list for CPRS GUI client
 MUMPS implementation | PROBL^ORQQPL3
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | List of problems with comments

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | Patient IEN | 25 |  | 
| GMPSTAT | LITERAL |  | Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed | A |  | 
| ORIDT | DATE |  | Problem date filter? This parameter is typically passed in as zero | 0 |  | 