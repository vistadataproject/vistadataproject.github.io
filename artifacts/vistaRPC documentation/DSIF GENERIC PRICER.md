---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF GENERIC PRICER 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF GENERIC PRICER{:/}
 tag | {::nomarkdown}GENERIC{:/}
 routine | [DSIFINP3](http://code.osehra.org/dox/Routine_DSIFINP3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to build a transaction to send to the Austin Pricer systemthis data will NOT be stored anywhere. It serves only as a tool todetermine reimbursement rates.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}75{:/} | {::nomarkdown}true{:/} | {::nomarkdown}NAME = \Lastname,Firstname MI;DOB (date);SSN;SEX\     Date format - \01151966\ [MMDDYYYY]{:/} | 
| {::nomarkdown}VENDAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}55{:/} | {::nomarkdown}true{:/} | {::nomarkdown}VENDAT = \Vendor name;Medicare ID;State (VistA Abreviation 2 Alpha)\{:/} | 
| {::nomarkdown}ADMDAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ADMDAT = \Admission date;Discharge date;Admitting Authority IEN;Disposition code IEN\  Date format - \01151966\ [MMDDYYYY]{:/} | 
| {::nomarkdown}REIMB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}REIMB = \Patient Reimbursement (0/1);Payment by Medicare or Other Federal Agency (0/1)\{:/} | 
| {::nomarkdown}ICD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICD = \ICD1;ICD2;ICD3:ICD4;ICD5\ [ICD1 is Mandatory - Primary Diagnosis]{:/} | 
| {::nomarkdown}PROC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PROC = \PROC1;PROC2;PROC3\  [PROC1 is mandatory, Primary procedure]{:/} | 
| {::nomarkdown}CHARGES{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CHARGES = \Billed Charges;Amount Claimed\{:/} | 




 Generated on January 13th 2017, 7:15:28 am