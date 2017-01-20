---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS WRITE MRAR PDO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS WRITE MRAR PDO{:/}
 tag | {::nomarkdown}WRITE{:/}
 routine | [VPSMRAR1](http://code.osehra.org/dox/Routine_VPSMRAR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system.  The RPC will accept 4 input parameters; and will return output when processing completes or ends with an exception.  Vetlink Kiosk has the Medication Review Allergy Review modules where a  veteran can review and make changes to his medicationsand any allergies.  The MRAR can also be facilitated by a provider.  Thelocal arrays identify the field to be updated along with the respectivedata changes and serves to the RPC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSPID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The patient identifier value corresponding to the provided identifiertype, VPSTYP.{:/} | 
| {::nomarkdown}VPSMRAR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Local array representing the kiosk Medication and Allergy Review passed in by reference.   VPSMRAR represents allergy relatedfields, medication related fields, and statistical information about theMRAR session. Each subscript in the array is assigned a composite, delimited string.  localArray(n) = FIELD NAME^ARRAY IENS^DATA  where       n is an incremental number      FIELD NAME represents the name of the field in 853.5 file       ARRAY IENS represent entry and sub-entry ctrs (e.g., if patient has 3     allergies then a given value would be \1,2\ where \1\ represents top     level entry and \2\ represents the sub-entry or the 2nd allergy     record.)      DATA is the actual data that is populated at an entry in 853.5 Note:  Each element in VPSMRAR will accept values in the above format. However, elements of some multiple fields use the third index as the value and will ignore provided input values.  {:/} | 
| {::nomarkdown}VPSINTFC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Interface Module.'S' represents Staff-facing Interface Module'P' represents Patient-facing Interface Module{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID Type. Valid Values for this parameter are SSN, DFN, ICN, orVIC/CAC.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}