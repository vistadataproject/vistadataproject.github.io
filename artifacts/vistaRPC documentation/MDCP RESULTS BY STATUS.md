---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDCP RESULTS BY STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}MDCP RESULTS BY STATUS{:/}
 tag | {::nomarkdown}GTMSGIDS{:/}
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call will return a list of IENS from the CP RESULT REPORT file based on the STATUS passed in as a parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDCPSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the EXTERNAL representation of the status to be used to generate the list of IENs.{:/} | 




 Generated on January 13th 2017, 7:15:28 am