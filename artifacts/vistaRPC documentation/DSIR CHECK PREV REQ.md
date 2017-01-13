---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR CHECK PREV REQ 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR CHECK PREV REQ{:/}
 tag | {::nomarkdown}CHECKCUR{:/}
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC checks for previous request for the current patient and requestor. It then returns an array of entries in file 19620 ROI INSTANCE.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the DFN of the patient.{:/} | 
| {::nomarkdown}REQUESTOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the requestor in file 19620.12 DSIR NEW REQUESTOR.{:/} | 




 Generated on January 13th 2017, 5:52:13 am