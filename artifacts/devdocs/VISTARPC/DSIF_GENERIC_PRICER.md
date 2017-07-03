---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF GENERIC PRICER
# DSIF GENERIC PRICER

Used to build a transaction to send to the Austin Pricer systemthis data will NOT be stored anywhere. It serves only as a tool todetermine reimbursement rates.  

Property | Value
--- | ---
Label | GENERIC
Routine | [DSIFINP3](http://code.osehra.org/dox/Routine_DSIFINP3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 75 | true | NAME &#x3D; &quot;Lastname,Firstname MI;DOB (date);SSN;SEX&quot;     Date format - &quot;01151966&quot; [MMDDYYYY]
VENDAT | LITERAL | 55 | true | VENDAT &#x3D; &quot;Vendor name;Medicare ID;State (VistA Abreviation 2 Alpha)&quot;
ADMDAT | LITERAL | 35 | true | ADMDAT &#x3D; &quot;Admission date;Discharge date;Admitting Authority IEN;Disposition code IEN&quot;  Date format - &quot;01151966&quot; [MMDDYYYY]
REIMB | LITERAL | 2 | true | REIMB &#x3D; &quot;Patient Reimbursement (0/1);Payment by Medicare or Other Federal Agency (0/1)&quot;
ICD | LITERAL | 35 | true | ICD &#x3D; &quot;ICD1;ICD2;ICD3:ICD4;ICD5&quot; [ICD1 is Mandatory - Primary Diagnosis]
PROC | LITERAL | 35 | true | PROC &#x3D; &quot;PROC1;PROC2;PROC3&quot;  [PROC1 is mandatory, Primary procedure]
CHARGES | LITERAL | 35 | true | CHARGES &#x3D; &quot;Billed Charges;Amount Claimed&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}