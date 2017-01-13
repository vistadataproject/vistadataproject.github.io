---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DG CHK PAT_DIV MEANS TEST 

 property | value 
--- | --- 
 label | {::nomarkdown}DG CHK PAT_DIV MEANS TEST{:/}
 tag | {::nomarkdown}GUIMTD{:/}
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}CHECKS IF MEANS TEST REQUIRED FOR PATIENT ANDCHECKS IF MEANS TEST DISPLAY REQUIRED FOR USER'S DIVISIONRETURNS 1 IN 1ST STRING IF BOTH TRUE OTHERWISE 0IF BOTH TRUE RETURNS TEXT IN 2ND AND 3RD STRING (IF ANY){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT IEN{:/} | 
| {::nomarkdown}DUZ2{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Institution file pointer{:/} | 




 Generated on January 13th 2017, 7:15:27 am