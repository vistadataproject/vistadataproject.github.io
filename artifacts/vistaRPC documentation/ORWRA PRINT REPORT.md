---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRA PRINT REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA PRINT REPORT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print an imaging report on the Imaging tabin CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | print report entry point

 Leading comment lines | {::nomarkdown}RPC: ORWRA PRINT REPORT
See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}EXAM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the imaging exam.{:/} | 




 Generated on January 13th 2017, 6:15:57 am