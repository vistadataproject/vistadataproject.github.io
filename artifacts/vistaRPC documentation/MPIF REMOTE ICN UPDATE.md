---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF REMOTE ICN UPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF REMOTE ICN UPDATE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call (RPC) allows the remote update of the INTEGRATION CONTROL NUMBER (#991.01), ICN CHECKSUM (#991.02), and COORDINATING MASTER OF RECORD (#991.03) fields in the PATIENT (#2) file at a specified site. The patient is found based upon social security number.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Social Security Number of the patient to be updated.{:/} | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICN - without the checksum to be updated in field 991.01{:/} | 
| {::nomarkdown}CHECK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown} CHECKSUM for the patient to be stored in field 991.02{:/} | 
| {::nomarkdown}CMOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Station Number to be stored as the CMOR in field 991.03.{:/} | 
| {::nomarkdown}A08{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If an A08 message needs to be sent this flag should be set to 1.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}