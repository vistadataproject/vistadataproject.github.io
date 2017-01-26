---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR ADD NONCOMP PAT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR ADD NONCOMP PAT{:/}
 tag | {::nomarkdown}ADDNCPR{:/}
 routine | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Routine for adding or updating an non-computerized patient for ROI.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient name.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}11{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient Social Security Number{:/} | 
| {::nomarkdown}DOB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the date of birth used for unique identification.patient file and the dsir noncomputerized record patient file.{:/} | 
| {::nomarkdown}OVRD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag (0 or 1) to override/bypass the lookups into xrefs.  If true the RPC will laygo into file 19620.96 without checking for duplicates.{:/} | 
| {::nomarkdown}NCPIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the desired IEN. If this exists then it is an update not an add.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}