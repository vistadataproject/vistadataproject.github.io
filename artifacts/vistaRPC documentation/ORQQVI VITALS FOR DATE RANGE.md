---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVI VITALS FOR DATE RANGE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI VITALS FOR DATE RANGE{:/}
 tag | {::nomarkdown}VITALS{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a patient's vital measurements between start date and stop date.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return patient's vital measurements taken between start date/time and end date/time
 Leading comment lines | ORY: return variable, results are returned in the format:
vital measurement ien^vital type^date/time taken^rate
DFN: patient identifier from Patient File [#2]
ORSDT: start date/time in Fileman format
OREDT: end date/time in Fileman format
DBIA for PXRMINDX(120.5 is 4290
DBIA for ^GMVPXRM is 3647
DBIA for ^GMRVUT0 is 1446

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.{:/} | 




 Generated on January 13th 2017, 5:52:13 am