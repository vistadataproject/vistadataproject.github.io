---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQAL DETAIL 

 property | value 
--- | --- 
 name | ORQQAL DETAIL
 description | {::nomarkdown}This function returns a string of information for a specific allergy/<br/>adverse reaction.  Returned data is delimited by \^\ and includes:<br/>allergen/reactant, originator, originator title, verified/not verified, <br/>observed/historical,,type, observation date, severity, drug class, <br/>symptoms/reactions (mulitple symptoms possible - delimited by \;\), <br/>comments.{:/}
 VISTA (8994) description | [nodeVISTA 8994](http://localhost:9000/query?fmql=DESCRIBE%208994%20FILTER%20(.01%3DORQQAL%20DETAIL)&format=HTML)
 MUMPS implementation | [DETAIL^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 type | READ_UNSTRUCTURED
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 |  | 
| ALLERGY_ID | REFERENCE | true | {::nomarkdown}The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8).{:/} | 4 |  | 
| ALLERGY_ID | REFERENCE | true | {::nomarkdown}The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8).{:/} | 4 |  | 