


## [RPCL](TableOfContent.md) --> ORQQAL DETAIL 

 property | value 
--- | --- 
 id | ORQQAL_DETAIL
 name | ORQQAL DETAIL
 function | DETAIL^ORQQAL
 rpcType | READ_UNSTRUCTURED
 complexity | MEDIUM
 uses | 
 description | This function returns a string of information for a specific allergy/\radverse reaction.  Returned data is delimited by \^\ and includes:\rallergen/reactant, originator, originator title, verified/not verified, \robserved/historical,,type, observation date, severity, drug class, \rsymptoms/reactions (mulitple symptoms possible - delimited by \;\), \rcomments.
 returnType | SINGLE VALUE
 returnDescription | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| DFN | REFERENCE | true | Patient IEN | 25 |  | 
| ALLERGY_ID | REFERENCE | true | The record number of the allergy/adverse reaction from the Patient\rAllergies file (#120.8). | 4 |  | 
| ALLERGY_ID | REFERENCE | true | The record number of the allergy/adverse reaction from the Patient\rAllergies file (#120.8). | 4 |  | 