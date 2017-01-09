---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL DELETE 

 property | value 
--- | --- 
 name | ORQQPL DELETE
 domain | Problem
 description | {::nomarkdown}DELETES A PROBLEM{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORQQPL%20DELETE)&format=HTML)
 MUMPS implementation | [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 
 Method comment | DELETE A PROBLEM
 Leading comment lines | From GMPL1 - silent version

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMPIFN | REFERENCE | true | {::nomarkdown}record ifn{:/} | 1 | 
| GMPROV | REFERENCE | true | {::nomarkdown}provider{:/} | 57 | 
| GMPVAMC | REFERENCE | true | {::nomarkdown}facility id{:/} | 2957 | 
| REASON | LITERAL |  | {::nomarkdown}reason for removal{:/} |  | 