---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE HASCPT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASCPT{:/}
 tag | {::nomarkdown}HASCPT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the passed array with the second piece set to 0 or 1.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns true if there are any mapped CPT Codes

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This array contains the values that would be present in the 811.1 file's\B\ cross reference.  Since the .01 field of this file is a variablepointer, it should appear as follows:PCE Data Type       Array ValueExam                IEN;AUTTEXAM(Health Factor       IEN;AUTTHF(Immunization        IEN;AUTTIMM(Education Topic     IEN;AUTTEDT(Skin Test           IEN;AUTTSK({:/} | 




 Generated on January 13th 2017, 6:24:32 am