---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET PROC REF ATTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET PROC REF ATTS{:/}
 tag | {::nomarkdown}GETPROCA{:/}
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC, given the internal entry number of an entry on the IMAGING PROCEDURE REFERENCE File (#2005.61), returns an array containing the field names and values that are defined for that entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient with whom this procedure reference is associated.{:/} | 
| {::nomarkdown}PROCREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the entry on the IMAGING PROCEDURE REFERENCE File (#2005.61) for which attribute values are to be returned.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}This parameter should be used with EXTREME CAUTION.  It suppresses the check of the patient reference IEN against the value of the PARENT IEN Field (#.99) on the IMAGING PROCEDURE REFERENCE File (#2005.61).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}