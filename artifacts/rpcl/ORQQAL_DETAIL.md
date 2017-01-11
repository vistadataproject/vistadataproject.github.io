---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQAL DETAIL 

 property | value 
--- | --- 
 name | ORQQAL DETAIL
 domain | Allergy
 description | {::nomarkdown}This function returns a string of information for a specific allergy/<br/>adverse reaction.  Returned data is delimited by \^\ and includes:<br/>allergen/reactant, originator, originator title, verified/not verified, <br/>observed/historical,,type, observation date, severity, drug class, <br/>symptoms/reactions (mulitple symptoms possible - delimited by \;\), <br/>comments.{:/}
 Native VISTA Description | [nodeVISTA 8994](../vistaRPC documentation/ORQQAL DETAIL)
 MUMPS implementation | [DETAIL^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 type | READ_UNSTRUCTURED
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| ALLERGY_ID | REFERENCE | true | {::nomarkdown}The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8).{:/} | 4 | 
| ALLERGY_ID | REFERENCE | true | {::nomarkdown}The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8).{:/} | 4 | 




 Generated on January 11th 2017, 7:16:21 am