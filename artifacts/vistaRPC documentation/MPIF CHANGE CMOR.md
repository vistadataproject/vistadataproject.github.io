---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MPIF CHANGE CMOR 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF CHANGE CMOR{:/}
 tag | {::nomarkdown}RCCMOR{:/}
 routine | [MPIFRPC](http://code.osehra.org/dox/Routine_MPIFRPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call (RPC) allows the changing/updating of the COORDINATING MASTER OF RECORD (#991.03) field in the PATIENT (#2) file for a specific patient. An A08 Update message can also be triggered.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICN - not including the checksum{:/} | 
| {::nomarkdown}CMOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The station number of the site that is to become the CMOR{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Social Security Number for the patient that is to be changed.  SSN willonly be used if ICN is not found to check if the problem is with the AICNx-ref on the ICN field.{:/} | 
| {::nomarkdown}A08{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field will serve as a flag to note whether or not an A08 update message should be triggered.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}