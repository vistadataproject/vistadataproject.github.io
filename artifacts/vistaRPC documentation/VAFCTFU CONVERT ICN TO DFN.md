---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFCTFU CONVERT ICN TO DFN 

 property | value 
--- | --- 
 label | {::nomarkdown}VAFCTFU CONVERT ICN TO DFN{:/}
 tag | {::nomarkdown}GETDFN{:/}
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2).{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ICN{:/}
 Lines | ```
 S RESULT=$$GETDFN^MPIF001(ICN)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Integration Control Number (ICN).{:/} | 




 Generated on January 13th 2017, 6:55:29 am