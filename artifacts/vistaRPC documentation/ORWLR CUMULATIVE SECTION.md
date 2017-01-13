---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLR CUMULATIVE SECTION 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR CUMULATIVE SECTION{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc retrieves the part of the lab cumulative report selected by the user on the Labs tab.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return cum report text

 Leading comment lines | {::nomarkdown}RPC: ORWLR REPORT TEXT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}PART OF CUMULATIVE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name that uniquely identifies the desired part of the lab cumulative.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the cumulative should search for information.{:/} | 
| {::nomarkdown}REPORT SECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifics which section of the lab cumulative partshould be retrieved. (An example of a part is 'Miscellaneous Tests'.)If REPORT SECTION equals 0 then the entire part is re-compiled and thefirst section is passed back. If the part is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters{:/} | 




 Generated on January 13th 2017, 6:15:57 am