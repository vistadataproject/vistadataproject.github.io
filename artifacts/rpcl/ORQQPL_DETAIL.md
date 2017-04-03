---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL DETAIL 

 property | value 
--- | --- 
 name | ORQQPL DETAIL
 domain | Problem
 description | {::nomarkdown}Function returns a string of detailed information for a problem.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQPL DETAIL)
 MUMPS implementation | [DETAIL^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 type | UNSTRUCTURED READ
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | String of detailed problem information delimited by \^\.  String includes:\\r

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| PROBLEM_ID | REFERENCE | true | {::nomarkdown}The record number of the problem from the Problem File (#9000011).{:/} | 1 | 
| ID | LITERAL |  | {::nomarkdown}undocumented parameter, source code marks this as ID but never used in M code{:/} |  | 

### Example return value

```
Fatty liver (SCT 197321007)
         SNOMED-CT: Steatosis of liver
 Primary ICD-10-CM: R69.   [ILLNESS, UNSPECIFIED]
 
        Onset: 
       Status: ACTIVE/CHRONIC
      SC Cond: UNKNOWN
     Exposure: None
 
     Provider: ALEXANDER,ROBERT
       Clinic: CLInicD
 
     Recorded: 11/8/16, by ALEXANDER,ROBERT
      Entered: 11/8/16, by ALEXANDER,ROBERT
      Updated: 11/8/16
 
 
----------- Audit History -----------
11/8/16:  IMMEDIACY changed by ALEXANDER,ROBERT from ACUTE to CHRONIC
```


{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}