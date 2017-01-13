---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST ICD 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST ICD{:/}
 tag | {::nomarkdown}ICDLIST{:/}
 routine | [RORRP016](http://code.osehra.org/dox/Routine_RORRP016_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST ICD remote procedure returns a list of ICD codes (fromthe ICD DIAGNOSIS or ICD OPERATION/PROCEDURE file), which conform thecriteria.                                      {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   A  Exclude active codes   B  Backwards. Traverses the index in the opposite     direction of normal traversal   D  Full search by description   F  Exclude codes applicable to females only   I  Exclude inactive codes   K  Search in description keywords   M  Exclude codes applicable to males only   0  Return operation/procedure codes from the ICD      OPERATION/PROCEDURE file (#80.1) instead of      diagnosis codes from the ICD DIAGNOSIS file (#80)   P  Exclude codes that are not acceptable     as primary diagnoses{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list   ^01: FromName   ^02: FromIEN  For example, a FROM value of \18\ would list entries following 18. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date for the code set versioning.{:/} | 
| {::nomarkdown}ICDTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Flag that controls whether ICD-9 or ICD-10 codes are searched.  ICD9  -  For ICD-9 codes search  ICD10 -  For ICD-10 codes search{:/} | 




 Generated on January 13th 2017, 6:24:32 am