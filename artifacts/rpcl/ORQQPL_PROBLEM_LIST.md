---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQPL PROBLEM LIST 

 property | value 
--- | --- 
 name | ORQQPL PROBLEM LIST
 domain | Problem
 description | {::nomarkdown}Problem list for CPRS GUI client{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORQQPL%20PROBLEM%20LIST)&format=HTML)
 MUMPS implementation | [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | List of problems with comments

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| GMPSTAT | LITERAL |  | {::nomarkdown}Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed{:/} | A | 
| ORIDT | DATE |  | {::nomarkdown}Problem date filter? This parameter is typically passed in as zero{:/} | 0 | 