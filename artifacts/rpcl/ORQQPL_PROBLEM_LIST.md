---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQPL PROBLEM LIST 

 property | value 
--- | --- 
 id | ORQQPL_PROBLEM_LIST
 name | ORQQPL PROBLEM LIST
 function | PROBL^ORQQPL3
 rpcType | CHANGE
 complexity | HIGH
 uses | 
 description | Problem list for CPRS GUI client
 returnType | ARRAY
 returnDescription | List of problems with comments

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | Patient IEN | 25 |  | 
| GMPSTAT | LITERAL |  | Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed | A |  | 
| ORIDT | DATE |  | Problem date filter? This parameter is typically passed in as zero | 0 |  | 