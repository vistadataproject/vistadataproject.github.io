---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DG CHK PAT_DIV MEANS TEST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DG CHK PAT_DIV MEANS TEST{:/}
 tag | {::nomarkdown}GUIMTD{:/}
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}CHECKS IF MEANS TEST REQUIRED FOR PATIENT ANDCHECKS IF MEANS TEST DISPLAY REQUIRED FOR USER'S DIVISIONRETURNS 1 IN 1ST STRING IF BOTH TRUE OTHERWISE 0IF BOTH TRUE RETURNS TEXT IN 2ND AND 3RD STRING (IF ANY){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT IEN{:/} | 
| {::nomarkdown}DUZ2{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Institution file pointer{:/} | 


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}