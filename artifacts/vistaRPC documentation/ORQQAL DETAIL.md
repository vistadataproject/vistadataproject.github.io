---
layout: default
title: RPCL documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL DETAIL 

 property | value 
--- | --- 
 name-8994 | ORQQAL DETAIL
 tag-8994 | DETAIL
 routine-8994 | ORQQAL
 return_value_type-8994 | ARRAY
 description-8994 | This function returns a string of information for a specific allergy/adverse reaction.  Returned data is delimited by \^\ and includes:allergen/reactant, originator, originator title, verified/not verified, observed/historical,<blank>,type, observation date, severity, drug class, symptoms/reactions (mulitple symptoms possible - delimited by \;\), comments.

### Input Parameters

| type | input_parameter-8994_02 | parameter_type-8994_02 | maximum_data_length-8994_02 | required-8994_02 | description-8994_02 | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ALLERGY ID | LITERAL | 16 | true | The record number of the allergy/adverse reaction from the PatientAllergies file (#120.8). | 