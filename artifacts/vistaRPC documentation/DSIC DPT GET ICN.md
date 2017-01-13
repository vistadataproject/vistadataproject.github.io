---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT GET ICN 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DPT GET ICN{:/}
 tag | {::nomarkdown}ICN{:/}
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return the patient's Integration Control Number (ICN) and a flag indicating whether or not it is a local ICN.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient lookup value which can be the DFN or name or SSN.{:/} | 
| {::nomarkdown}ISSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This Boolean (0, 1) flag indicates whether or not PAT (the patient lookupvalue) is a SSN value.{:/} | 




 Generated on January 13th 2017, 5:52:13 am