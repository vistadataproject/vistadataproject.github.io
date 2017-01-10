---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF GENERIC PRICER 

 property | value 
--- | --- 
 label | DSIF GENERIC PRICER
 tag | GENERIC
 routine | [DSIFINP3](http://code.osehra.org/dox/Routine_DSIFINP3_source.html)
 return value type | SINGLE VALUE
 description | Used to build a transaction to send to the Austin Pricer systemthis data will NOT be stored anywhere. It serves only as a tool todetermine reimbursement rates.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAME | LITERAL | 75 | true | NAME = \Lastname,Firstname MI;DOB (date);SSN;SEX\     Date format - \01151966\ [MMDDYYYY] | 
| vs:Input_Parameter-8994_02 | VENDAT | LITERAL | 55 | true | VENDAT = \Vendor name;Medicare ID;State (VistA Abreviation 2 Alpha)\ | 
| vs:Input_Parameter-8994_02 | ADMDAT | LITERAL | 35 | true | ADMDAT = \Admission date;Discharge date;Admitting Authority IEN;Disposition code IEN\  Date format - \01151966\ [MMDDYYYY] | 
| vs:Input_Parameter-8994_02 | REIMB | LITERAL | 2 | true | REIMB = \Patient Reimbursement (0/1);Payment by Medicare or Other Federal Agency (0/1)\ | 
| vs:Input_Parameter-8994_02 | ICD | LITERAL | 35 | true | ICD = \ICD1;ICD2;ICD3:ICD4;ICD5\ [ICD1 is Mandatory - Primary Diagnosis] | 
| vs:Input_Parameter-8994_02 | PROC | LITERAL | 35 | true | PROC = \PROC1;PROC2;PROC3\  [PROC1 is mandatory, Primary procedure] | 
| vs:Input_Parameter-8994_02 | CHARGES | LITERAL | 35 | true | CHARGES = \Billed Charges;Amount Claimed\ | 