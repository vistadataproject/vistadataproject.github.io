---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET REPORT{:/}
 tag | {::nomarkdown}GETRPT{:/}
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC, given the internal entry number of an entry on the IMAGINGPROCEDURE REFERENCE File (#2005.61) that references a VA procedure,returns an array containing the report text for that procedure and associated attributes.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number on the IMAGING PATIENT REFERENCE File(#2005.6) of the patient with whom this procedure reference isassociated.{:/} | 
| {::nomarkdown}PROCREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) for which report information is to be returned.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}This parameter should be used with EXTREME CAUTION.  If valued TRUE(nonzero), it suppresses the check of the patient reference IEN againstthe value of the PARENT IEN Field (#.99) on the IMAGING PROCEDUREREFERENCE File (#2005.61).{:/} | 




 Generated on January 13th 2017, 6:44:48 am