---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC FM PULL LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM PULL LIST{:/}
 tag | {::nomarkdown}PULL{:/}
 routine | [DSICFM](http://code.osehra.org/dox/Routine_DSICFM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns values to populate a list box of choices for a field that isSET OF CODES or POINTER or VARIABLE POINTER type.VARIABLE POINTER.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File or subfile number (canonic).{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Field number (canonic) of field for which choices are desired.Field must be set of codes or pointer or variable pointer.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is optional and applies only to POINTER and VARIABLEPOINTER field types.  It is not used with SET OF CODES type. Starting value for search. If specified this is usually the lastvalue returned from the previous call.  If the field is a POINTERonly the value should be argued.  If the field is a VARIABLEPOINTER, both value and file should be argued, as VALUE^FILE.Both \^\-pieces can be copied from the last returned value.{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of values to return.  The default is 200.For VARIABLE POINTER fields the sum accumulates across pointed-tofiles.{:/} | 
| {::nomarkdown}MASK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}An optional mask that constrains the values to be returned.For example, \SMI\ returns all values that start with the \SMI\like SMITH, filtering out values that do not start with thespecified mask like SAM.value, not the external value of a field.  PART is often a partial match to FROM. For example, FROM(1)=\ZTMMGR\, and PART(1)=\ZTM\ would return only entries that began with \ZTM\ and came after \ZTMMGR\. It would not include \ZTZERO\, even though it comes after \ZTMMGR\. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}