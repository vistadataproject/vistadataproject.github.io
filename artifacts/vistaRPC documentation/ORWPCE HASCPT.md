---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE HASCPT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASCPT{:/}
 tag | {::nomarkdown}HASCPT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the passed array with the second piece set to 0 or 1.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This array contains the values that would be present in the 811.1 file's\B\ cross reference.  Since the .01 field of this file is a variablepointer, it should appear as follows:PCE Data Type       Array ValueExam                IEN;AUTTEXAM(Health Factor       IEN;AUTTHF(Immunization        IEN;AUTTIMM(Education Topic     IEN;AUTTEDT(Skin Test           IEN;AUTTSK({:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HASCPT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if there are any mapped CPT Codes
 Input parameters | {::nomarkdown}ORLIST{:/}
 Code | ```  N IEN,IDX,FOUND
 S IDX=0
 F  S IDX=$O(ORLIST(IDX)) Q:'+IDX  D
 . S FOUND=0
 . S IEN=$$FIND1^DIC(811.1,"","QX",ORLIST(IDX))
 . I +IEN S FOUND=+$$GET1^DIQ(811.1,IEN,.05,"I")
 . S ORY(IDX)=ORLIST(IDX)_"="_FOUND```




 Generated on January 14th 2017, 7:26:35 am