---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP CONSULT TO TIUDA 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CP CONSULT TO TIUDA{:/}
 tag | {::nomarkdown}TIUDA{:/}
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Imaging Capture workstation calls this RPC to get a TIU IEN to attach images to. This call simply calls a CP API, which accepts DFN, Consult #, Visit String (optional), Complete|Do not Complete the | transaction.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of Patient{:/} | 
| {::nomarkdown}MAGCONS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the consult #.  The consult # is returned as a part of the Clinical Procedure Requests Query.{:/} | 
| {::nomarkdown}MAGVSTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Visit String, needed to create a New Tiu Note. Visit String is returned as part of the Query to get Patient Visits. The Query to get a list of patient visits, is done directly before this call from the Capture Workstation.{:/} | 
| {::nomarkdown}MAGCMP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Flag:  tells to Complete (1) or Not Complete (0) the CP transaction.  If Not Complete, then this transaction is available on the CP User station to attach images to.{:/} | 




 Generated on January 13th 2017, 5:52:13 am