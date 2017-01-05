---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQVI VITALS 

 property | value 
--- | --- 
 name | ORQQVI VITALS
 description | Array of patient most recent vitals within start and stop date/times.  If\rno start and stop dates are indicated, the most recent are returned.\r \rIf no start date is passed then the start date is 1 (i.e. before any\rdates).\r \rIf no stop date is passed then the start date is also the stop date and if\rthere is not start date then 9999999 is used as the stop date.
 MUMPS implementation | 
 type | READ STRUCTURED
 complexity | MEDIUM
 uses | 
 return type | ARRAY
 return description | Array of patient most recent vitals within start and stop date/times.  \rIf no start and stop dates are indicated, the most recent are returned.\rVitals are returned in the format:\rvital ien^vital type^rate/value^date/time taken

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | Patient id (DFN) from Patient File (#2). |  |  | 
| START_DATETIME | LITERAL |  | Start date/time for vital retrieval in Fileman format.\rIf none is passed then the start date is 1 (i.e. before any dates). |  |  | 
| STOP_DATETIME | LITERAL |  | Stop date/time for vital retrieval in Fileman format.\rIf none is passed then the Start date is also the stop date and if there\ris not start date then 9999999 is used as the stop date |  |  | 