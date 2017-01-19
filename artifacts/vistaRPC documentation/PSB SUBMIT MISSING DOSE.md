---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB SUBMIT MISSING DOSE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB SUBMIT MISSING DOSE{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBMD](http://code.osehra.org/dox/Routine_PSBMD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Allows the client to submit a missing dose interactively.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN (IEN){:/} | 
| {::nomarkdown}PSBDRUG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the drug from File #50.{:/} | 
| {::nomarkdown}PSBDOSE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Dosage.{:/} | 
| {::nomarkdown}PSBRSN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Missing Dose reason. INTERNALLY-STORED CODE: 1   WILL STAND FOR: DROPPEDINTERNALLY-STORED CODE: 2   WILL STAND FOR: EMPTY PACKAGEINTERNALLY-STORED CODE: 3   WILL STAND FOR: NOT AVAILABLEINTERNALLY-STORED CODE: 4   WILL STAND FOR: WRONG DOSE/DRUG DELIVERED{:/} | 
| {::nomarkdown}PSBADMIN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Administration time of the medication.{:/} | 
| {::nomarkdown}PSBNEED{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Needed date/time of the medication{:/} | 
| {::nomarkdown}PSBUID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Unique ID of an IV bag if it's an IV order.{:/} | 
| {::nomarkdown}PSBON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Order Number{:/} | 
| {::nomarkdown}PSBSCHD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Medication Schedule.{:/} | 
| {::nomarkdown}PSBCLIN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinic Name{:/} | 
| {::nomarkdown}PSBCLNIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Clinic pointer to the HOSPITAL LOCATION file (#44) for a clinic submitting a missing dose request.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}