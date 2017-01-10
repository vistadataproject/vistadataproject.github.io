---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE HASCPT 

 property | value 
--- | --- 
 label | ORWPCE HASCPT
 tag | HASCPT
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | ARRAY
 description | Returns the passed array with the second piece set to 0 or 1.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORLIST | LIST |  |  | This array contains the values that would be present in the 811.1 file's\B\ cross reference.  Since the .01 field of this file is a variablepointer, it should appear as follows:PCE Data Type       Array ValueExam                IEN;AUTTEXAM(Health Factor       IEN;AUTTHF(Immunization        IEN;AUTTIMM(Education Topic     IEN;AUTTEDT(Skin Test           IEN;AUTTSK( | 