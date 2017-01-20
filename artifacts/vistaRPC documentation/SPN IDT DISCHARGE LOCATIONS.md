---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN IDT DISCHARGE LOCATIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN IDT DISCHARGE LOCATIONS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCJ](http://code.osehra.org/dox/Routine_SPNRPCJ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the Discharge Locations subscreen of the InfluenzaDiagnosis and Treatment Report. Returns discharge location and discharge date (Note: potentially, this can also be used for admission location and admission date, by passing a 1 in the TYPE parameter).  A TYPE parameter of 1 will return admissioninformation, whereas 3 will return discharge information. Parameter values:       DFN is ien of the patient      CUTDATE is the date from which to start collection of data      TYPE is 1 for Admission, 3 for Discharge  Sample ^TMP Global data string, using first item, and based on:DFN     = 4812CUTDATE = JAN 1,1980TYPE    = 3   Piece   1 is Date & Time of Admission --> NOV 27, 1996@08:30:35   2 is Ward admitted to --> 3SE   3 is Room-Bed --> 3D15-6   4 is Date & Time of Discharge --> NOV 29,1996@14:37:18   5 is Discharge Location --> RETURN TO COMMUNITY-INDEPENDENT   6 is Mumps global root and ien (for troubleshooting only)   7 is End of Line indicator (EOL999)  ^TMP(541077599,1) = NOV 27, 1996@08:30:35^3SE^3D15-6^NOV 29, 1996@14:37:18^RETURN TO COMMUNITY-INDEPENDENT^DGPT(101199^EOL999{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CUTDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}