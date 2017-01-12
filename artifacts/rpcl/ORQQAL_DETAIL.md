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

#### Example return value

    Causative agent: ACETAMINOPHEN/CODEINE
 Nature of Reaction: Adverse Reaction

     Signs/symptoms: CHEST PAIN
                     HIVES

         Originator: ALEXANDER,ROBERT
         Originated: Feb 18, 2016@17:05
 Obs dates/severity: MAR 01, 2016

           Verified: <auto-verified>
Observed/Historical: Observed

Comments:
   NOV 06, 2016@03:18 by ORIGINATOR
don't give the guy this med! 





 Generated on January 12th 2017, 6:57:40 am