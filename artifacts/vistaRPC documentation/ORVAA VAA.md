---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORVAA VAA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORVAA VAA{:/}
 tag | {::nomarkdown}VAA{:/}
 routine | [ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the policy name for a veteran with VA Advantage. If the veteran does not have VA Advantage the return value will be 0.{:/}


### Method description

 property | value 
 --- | --- 
 Leading comment lines | {::nomarkdown}Returns primary insurance policy name if VAA or TriCare{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DFN is the veteran patient's Internal Entry Number in the PATIENT file.{:/} | 




 Generated on January 13th 2017, 6:24:32 am